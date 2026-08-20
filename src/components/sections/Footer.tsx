"use client";

import Link from "@/components/ui/Link";
import { clearConsent } from "@/lib/consent";

export default function Footer() {
	const anoAtual = new Date().getFullYear();

	return (
		<footer className="bg-graphite-900">
			<div className="mx-auto grid max-w-6xl place-items-center gap-4 px-4 py-6 text-center sm:px-6 sm:py-10">
				<div className="grid place-items-center gap-3">
					<p className="text-sm text-graphite-300">
						Locação de equipamentos para construção civil em Sobral-CE.
					</p>
					<p className="text-xs text-graphite-300/70">
						Preços podem sofrer reajuste e devem ser confirmados no atendimento.
					</p>
					<p className="mt-1 text-sm text-graphite-300">
						© {anoAtual} Eleve Locações
					</p>
					<Link variant="subtle" onClick={clearConsent}>
						Preferências de cookies
					</Link>
				</div>

				<div className="h-px w-full bg-graphite-700"></div>

				<p className="flex items-center gap-1 text-xs text-graphite-300">
					Feito por
					<Link
						href="https://kauanallyson.com.br"
						target="_blank"
						rel="noopener noreferrer"
						variant="default"
					>
						kauanallyson
					</Link>
				</p>
			</div>
		</footer>
	);
}
