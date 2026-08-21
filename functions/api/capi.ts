interface Env {
	META_CAPI_ACCESS_TOKEN: string;
}

interface CapiRequestBody {
	event_name: string;
	event_id: string;
	event_source_url: string;
	fbp?: string;
	fbc?: string;
	custom_data?: Record<string, unknown>;
}

interface CapiRequestContext {
	request: Request;
	env: Env;
}

const META_PIXEL_ID = "1761995821596014";
const ALLOWED_EVENTS = new Set(["Contact", "Lead", "ViewContent", "FindLocation"]);

export async function onRequestPost({
	request,
	env,
}: CapiRequestContext): Promise<Response> {
	let payload: CapiRequestBody;
	try {
		payload = await request.json();
	} catch {
		return new Response("Invalid JSON", { status: 400 });
	}

	if (!ALLOWED_EVENTS.has(payload.event_name) || !payload.event_id) {
		return new Response("Invalid event", { status: 400 });
	}

	const metaResponse = await fetch(
		`https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${env.META_CAPI_ACCESS_TOKEN}`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: [
					{
						event_name: payload.event_name,
						event_id: payload.event_id,
						event_time: Math.floor(Date.now() / 1000),
						event_source_url: payload.event_source_url,
						action_source: "website",
						user_data: {
							client_ip_address: request.headers.get("CF-Connecting-IP"),
							client_user_agent: request.headers.get("User-Agent"),
							fbp: payload.fbp,
							fbc: payload.fbc,
						},
						custom_data: payload.custom_data,
					},
				],
			}),
		},
	);

	if (!metaResponse.ok) {
		return new Response("Upstream error", { status: 502 });
	}

	return new Response(null, { status: 204 });
}
