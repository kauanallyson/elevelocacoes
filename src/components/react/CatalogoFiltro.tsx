import { useMemo, useState } from "react";
import type { Categoria, Equipamento } from "../../data/equipamentos";
import { normalizar } from "../../lib/formato";
import { linkWhatsApp, MENSAGEM_GERAL } from "../../lib/whatsapp";
import CardEquipamento from "./CardEquipamento";

type EquipamentoComFoto = Equipamento & { temFoto: boolean };

type Props = {
  equipamentos: EquipamentoComFoto[];
  categorias: Categoria[];
};

export default function CatalogoFiltro({ equipamentos, categorias }: Props) {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const categoriaLabelPorId = useMemo(
    () => new Map(categorias.map((c) => [c.id, c.label])),
    [categorias],
  );

  const visiveis = useMemo(() => {
    const termo = normalizar(busca.trim());
    return equipamentos.filter((equipamento) => {
      const combinaCategoria =
        categoriaAtiva === "todos" || equipamento.categoria === categoriaAtiva;
      const combinaBusca =
        termo === "" || normalizar(equipamento.nome).includes(termo);
      return combinaCategoria && combinaBusca;
    });
  }, [equipamentos, busca, categoriaAtiva]);

  return (
    <div>
      <div className="mt-8 flex flex-col gap-4">
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
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar por categoria"
        >
          <button
            type="button"
            className="chip-categoria rounded-sm border border-graphite-300 px-3.5 py-1.5 text-sm font-medium text-graphite-900 transition-colors data-[active=true]:border-accent data-[active=true]:bg-accent-tint data-[active=true]:text-accent-dark"
            data-active={categoriaAtiva === "todos"}
            aria-pressed={categoriaAtiva === "todos"}
            onClick={() => setCategoriaAtiva("todos")}
          >
            Todos
          </button>
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              type="button"
              className="chip-categoria rounded-sm border border-graphite-300 px-3.5 py-1.5 text-sm font-medium text-graphite-900 transition-colors data-[active=true]:border-accent data-[active=true]:bg-accent-tint data-[active=true]:text-accent-dark"
              data-active={categoriaAtiva === categoria.id}
              aria-pressed={categoriaAtiva === categoria.id}
              onClick={() => setCategoriaAtiva(categoria.id)}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-graphite-700" aria-live="polite">
          {visiveis.length} de {equipamentos.length} equipamentos
        </p>
      </div>

      {visiveis.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visiveis.map((equipamento) => (
            <CardEquipamento
              key={equipamento.slug}
              equipamento={equipamento}
              categoriaLabel={
                categoriaLabelPorId.get(equipamento.categoria) ??
                equipamento.categoria
              }
              temFoto={equipamento.temFoto}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="font-display text-xl text-graphite-900">
            Nenhum equipamento encontrado
          </p>
          <p className="mt-2 text-graphite-700">
            Não achou o que precisa no catálogo? Chame no WhatsApp — a gente
            pode ter o equipamento fora da lista.
          </p>
          <a
            href={linkWhatsApp(MENSAGEM_GERAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-graphite-900 transition-colors hover:bg-accent-dark"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
