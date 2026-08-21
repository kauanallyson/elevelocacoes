import { CATEGORIAS } from "@/data/equipamentos";
import type { EquipamentoComFoto } from "@/lib/produtos";
import CardEquipamento from "./CardEquipamento";

type Props = {
	equipamentos: EquipamentoComFoto[];
	id?: string;
	className?: string;
};

const categoriaLabelPorId = new Map(
	CATEGORIAS.map((c) => [c.id, c.label] as const),
);

export default function EquipamentoList({
	equipamentos,
	id,
	className,
}: Props) {
	return (
		<div
			id={id}
			className={className ?? "grid grid-cols-2 gap-5 sm:grid-cols-4"}
		>
			{equipamentos.map((equipamento, index) => (
				<CardEquipamento
					key={equipamento.slug}
					equipamento={equipamento}
					categoriaLabel={
						categoriaLabelPorId.get(equipamento.categoria) ??
						equipamento.categoria
					}
					priority={index < 4}
				/>
			))}
		</div>
	);
}
