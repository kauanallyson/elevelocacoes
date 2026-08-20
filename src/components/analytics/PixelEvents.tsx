"use client";

import { useEffect } from "react";
import { getConsent } from "@/lib/consent";

declare const fbq: (...args: unknown[]) => void;

const handlers: Record<string, (alvo: HTMLElement) => void> = {
	whatsapp: () => {
		fbq("track", "Contact");
		fbq("track", "Lead");
	},
	produto: (alvo) => {
		fbq("track", "ViewContent", {
			content_name: alvo.dataset.produtoNome,
			content_category: alvo.dataset.categoria,
			content_type: "product",
		});
	},
	localizacao: () => {
		fbq("track", "FindLocation");
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
