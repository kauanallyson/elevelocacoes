export const CONSENT_KEY = "cookie-consent";
export const CONSENT_CHANGED_EVENT = "consent-changed";

export type ConsentStatus = "granted" | "denied" | null;

export function getConsent(): ConsentStatus {
	const value = localStorage.getItem(CONSENT_KEY);
	return value === "granted" || value === "denied" ? value : null;
}

export function setConsent(status: "granted" | "denied") {
	localStorage.setItem(CONSENT_KEY, status);
	window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT));
}

export function clearConsent() {
	localStorage.removeItem(CONSENT_KEY);
	window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT));
}
