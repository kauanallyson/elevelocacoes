import { EQUIPAMENTOS, type Equipamento } from "@/data/equipamentos";

function list(): Equipamento[] {
	return EQUIPAMENTOS;
}

function getEquipamento(slug: string): Equipamento | undefined {
	return EQUIPAMENTOS.find((equipamento) => equipamento.slug === slug);
}

function preview(slugs: string[]): Equipamento[] {
	const porSlug = new Map(EQUIPAMENTOS.map((e) => [e.slug, e] as const));
	return slugs
		.map((slug) => porSlug.get(slug))
		.filter((equipamento): equipamento is Equipamento => Boolean(equipamento));
}

function related(equipamento: Equipamento, limit: number) {
	return EQUIPAMENTOS.filter(
		(item) =>
			item.categoria === equipamento.categoria &&
			item.slug !== equipamento.slug,
	).slice(0, limit);
}

export const produtos = { list, getEquipamento, preview, related };
