import Image from "next/image";
import Link from "next/link";
import WrenchIcon from "@/components/icons/WrenchIcon";
import type { EquipamentoComFoto } from "@/lib/produtos";

type Props = {
	equipamento: EquipamentoComFoto;
	categoriaLabel: string;
};

export default function CardEquipamento({
	equipamento,
	categoriaLabel,
}: Props) {
	const { slug, nome, temFoto } = equipamento;

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
				{temFoto ? (
					<Image
						src={`/produtos/${slug}.webp`}
						alt=""
						fill
						loading="eager"
						className="h-full w-full object-cover"
					/>
				) : (
					<div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
						<WrenchIcon />
						<p className="font-display text-sm leading-tight text-white">
							{nome}
						</p>
					</div>
				)}
			</div>

			<div className="p-4">
				<p className="font-mono text-[11px] uppercase tracking-wide text-graphite-700 hidden sm:block">
					{categoriaLabel}
				</p>
				<h3 className="mt-1 font-display text-lg leading-tight text-graphite-900">
					{nome}
				</h3>
			</div>
		</Link>
	);
}
