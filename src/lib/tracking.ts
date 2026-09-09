import { getConsent } from "@/lib/consent";

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
		fbq?: (...args: unknown[]) => void;
	}
}

const CONVERSION_SEND_TO = {
	whatsapp_cta: "AW-18384450133/GWQoCM6BqfIcENXksb5E",
	home_viewed: "AW-18384450133/GlAVCNGBqfIcENXksb5E",
	contato: "AW-18384450133/hCEVCNSBqfIcENXksb5E",
} as const;

const META_EVENT = {
	whatsapp_cta: "Lead",
	home_viewed: "ViewContent",
	contato: "Contact",
} as const;

export type TrackingEvent = keyof typeof CONVERSION_SEND_TO;

export function track(event: TrackingEvent) {
	if (getConsent() !== "granted") return;

	window.gtag?.("event", "conversion", {
		send_to: CONVERSION_SEND_TO[event],
		value: 1.0,
		currency: "BRL",
	});

	window.fbq?.("track", META_EVENT[event]);
}
