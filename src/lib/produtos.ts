import fs from "node:fs";
import path from "node:path";
import { EQUIPAMENTOS, type Equipamento } from "@/data/equipamentos";

export type EquipamentoComFoto = Equipamento & { temFoto: boolean };

function temFoto(slug: string) {
	return fs.existsSync(
		path.join(process.cwd(), "public", "produtos", `${slug}.webp`),
	);
}

let catalogo: EquipamentoComFoto[] | undefined;

function listComFoto(): EquipamentoComFoto[] {
	if (!catalogo) {
		catalogo = EQUIPAMENTOS.map((equipamento) => ({
			...equipamento,
			temFoto: temFoto(equipamento.slug),
		}));
	}
	return catalogo;
}

function getEquipamento(slug: string): EquipamentoComFoto | undefined {
	return listComFoto().find((equipamento) => equipamento.slug === slug);
}

function preview(slugs: string[]): EquipamentoComFoto[] {
	const porSlug = new Map(listComFoto().map((e) => [e.slug, e] as const));
	return slugs
		.map((slug) => porSlug.get(slug))
		.filter((equipamento): equipamento is EquipamentoComFoto =>
			Boolean(equipamento),
		);
}

function related(equipamento: EquipamentoComFoto, limit: number) {
	return listComFoto()
		.filter(
			(item) =>
				item.categoria === equipamento.categoria &&
				item.slug !== equipamento.slug,
		)
		.slice(0, limit);
}

export const produtos = { listComFoto, getEquipamento, preview, related };
