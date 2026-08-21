"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/capi";
import { getConsent } from "@/lib/consent";

const handlers: Record<string, (alvo: HTMLElement) => void> = {
	whatsapp: () => {
		trackEvent("Contact");
		trackEvent("Lead");
	},
	produto: (alvo) => {
		trackEvent("ViewContent", {
			content_name: alvo.dataset.produtoNome,
			content_category: alvo.dataset.categoria,
			content_type: "product",
		});
	},
	localizacao: () => {
		trackEvent("FindLocation");
	},
};

export default function PixelEvents() {
	useEffect(() => {
		function onClick(event: MouseEvent) {
			const alvo = (event.target as HTMLElement).closest<HTMLElement>(
				"[data-pixel]",
			);
			if (!alvo || getConsent() !== "granted") return;

			handlers[alvo.dataset.pixel ?? ""]?.(alvo);
		}

		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);

	return null;
}
