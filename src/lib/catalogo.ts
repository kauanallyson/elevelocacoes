import {
	CATEGORIAS,
	type CategoriaId,
	type Equipamento,
} from "@/data/equipamentos";

const CATEGORIA_IDS = CATEGORIAS.map((categoria) => categoria.id);

export function toLowercaseWithoutAccent(text: string) {
	return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function isCategoriaId(value: string | null): value is CategoriaId {
	return value !== null && (CATEGORIA_IDS as string[]).includes(value);
}

export function filtrarEquipamentos(
	equipamentos: Equipamento[],
	busca: string,
	categoria: CategoriaId | "todos",
) {
	const termo = toLowercaseWithoutAccent(busca.trim());
	return equipamentos.filter((equipamento) => {
		const combinaCategoria =
			categoria === "todos" || equipamento.categoria === categoria;
		const combinaBusca =
			termo === "" ||
			toLowercaseWithoutAccent(equipamento.nome).includes(termo);
		return combinaCategoria && combinaBusca;
	});
}
