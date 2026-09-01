import Link from "next/link";
import type { Equipamento } from "@/data/equipamentos";
import ProdutoImagem from "./ProdutoImagem";

type Props = {
	equipamento: Equipamento;
	categoriaLabel: string;
	priority?: boolean;
};

export default function CardEquipamento({
	equipamento,
	categoriaLabel,
	priority = false,
}: Props) {
	const { slug, nome, imagem } = equipamento;

	return (
		<Link
			href={`/catalogo/${slug}`}
			className="flex flex-col rounded-md border border-graphite-100 bg-white"
			data-card
			data-nome={nome}
			data-categoria={equipamento.categoria}
			data-pixel="produto"
			data-produto-nome={nome}
		>
			<div className="relative aspect-4/3 w-full overflow-hidden bg-graphite-900">
				<ProdutoImagem
					src={imagem}
					alt={nome}
					loading={priority ? "eager" : "lazy"}
				/>
			</div>

			<div className="p-4">
				<p className="font-mono text-[11px] uppercase tracking-wide text-graphite-700 hidden sm:block">
					{categoriaLabel}
				</p>
				<h3 className="mt-1 font-display text-xl leading-tight text-graphite-900">
					{nome}
				</h3>
			</div>
		</Link>
	);
}
