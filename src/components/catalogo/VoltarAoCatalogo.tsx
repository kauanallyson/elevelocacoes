"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";

export default function VoltarAoCatalogo() {
	const router = useRouter();

	function handleClick(event: MouseEvent<HTMLAnchorElement>) {
		const veioDoCatalogo =
			window.history.length > 1 &&
			document.referrer.startsWith(window.location.origin);

		if (veioDoCatalogo) {
			event.preventDefault();
			router.back();
		}
	}

	return (
		<Link
			href="/catalogo"
			onClick={handleClick}
			className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-graphite-700 transition-colors hover:text-accent-dark"
		>
			<ArrowLeftIcon /> Voltar ao catálogo
		</Link>
	);
}
