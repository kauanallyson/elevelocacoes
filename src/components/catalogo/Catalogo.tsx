"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import { CATEGORIAS, type CategoriaId } from "@/data/equipamentos";
import type { EquipamentoComFoto } from "@/lib/produtos";
import { linkWhatsApp, MENSAGEM_GERAL } from "@/lib/whatsapp";
import EquipamentoList from "./EquipamentoList";

type Props = {
	equipamentos: EquipamentoComFoto[];
};

function normalizar(texto: string) {
	return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export default function Catalogo({ equipamentos }: Props) {
	const [busca, setBusca] = useState("");
	const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaId | "todos">(
		"todos",
	);

	const filtrados = useMemo(() => {
		const termo = normalizar(busca.trim());
		return equipamentos.filter((equipamento) => {
			const combinaCategoria =
				categoriaAtiva === "todos" || equipamento.categoria === categoriaAtiva;
			const combinaBusca =
				termo === "" || normalizar(equipamento.nome).includes(termo);
			return combinaCategoria && combinaBusca;
		});
	}, [busca, categoriaAtiva, equipamentos]);

	return (
		<section id="catalogo" className="bg-white py-4 sm:py-8">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="max-w-2xl">
					<h1 className="font-mono font-medium uppercase text-accent-dark text-4xl">
						Catálogo
					</h1>
				</div>

				<div className="top-16 z-30 -mx-4 flex flex-col gap-4 border-b border-graphite-100 bg-white/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6">
					<div className="relative max-w-md">
						<label htmlFor="busca-equipamento" className="sr-only">
							Buscar equipamento pelo nome
						</label>
						<input
							id="busca-equipamento"
							type="search"
							placeholder="Buscar equipamento (ex: betoneira, escora, martelo...)"
							className="w-full rounded-sm border border-graphite-300 bg-white px-4 py-2.5 text-sm text-graphite-900 placeholder:text-graphite-700/60 focus-visible:border-accent-dark"
							autoComplete="off"
							value={busca}
							onChange={(event) => setBusca(event.target.value)}
						/>
					</div>

					<fieldset className="m-0 flex flex-wrap gap-2 border-0 p-0">
						<legend className="sr-only">Filtrar por categoria</legend>
						<Chip
							categoria="todos"
							active={categoriaAtiva === "todos"}
							onClick={() => setCategoriaAtiva("todos")}
						>
							Todos
						</Chip>
						{CATEGORIAS.map((categoria) => (
							<Chip
								key={categoria.id}
								categoria={categoria.id}
								active={categoriaAtiva === categoria.id}
								onClick={() => setCategoriaAtiva(categoria.id)}
							>
								{categoria.label}
							</Chip>
						))}
					</fieldset>
				</div>

				{filtrados.length > 0 ? (
					<EquipamentoList
						id="catalogo-grid"
						className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4"
						equipamentos={filtrados}
					/>
				) : (
					<div className="py-16 text-center">
						<p className="font-display text-xl text-graphite-900">
							Nenhum equipamento encontrado
						</p>
						<p className="mt-2 text-graphite-700">
							Não achou o que precisa no catálogo? Chame no WhatsApp a gente
							pode ter o equipamento fora da lista.
						</p>
						<Button
							href={linkWhatsApp(MENSAGEM_GERAL)}
							target="_blank"
							rel="noopener noreferrer"
							data-pixel="whatsapp"
							className="mt-5"
						>
							Falar no WhatsApp
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
