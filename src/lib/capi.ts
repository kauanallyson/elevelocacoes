declare const fbq: (...args: unknown[]) => void;

function readCookie(name: string): string | undefined {
	const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return match ? decodeURIComponent(match[1]) : undefined;
}

export function trackEvent(
	eventName: string,
	customData?: Record<string, unknown>,
) {
	const eventId = crypto.randomUUID();

	fbq("track", eventName, customData, { eventID: eventId });

	fetch("/api/capi", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		keepalive: true,
		body: JSON.stringify({
			event_name: eventName,
			event_id: eventId,
			event_source_url: window.location.href,
			fbp: readCookie("_fbp"),
			fbc: readCookie("_fbc"),
			custom_data: customData,
		}),
	}).catch(() => {});
}
