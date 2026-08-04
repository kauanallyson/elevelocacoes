import { formatBRL } from "../../lib/formato";
import { linkWhatsApp, mensagemProduto } from "../../lib/whatsapp";
import type { Equipamento } from "../../data/equipamentos";

type Props = {
  equipamento: Equipamento;
  categoriaLabel: string;
  temFoto: boolean;
};

export default function CardEquipamentoReact({
  equipamento,
  categoriaLabel,
  temFoto,
}: Props) {
  const { slug, nome, tipoPreco, precos, descricao } = equipamento;

  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-graphite-100 bg-white transition-shadow hover:shadow-lg hover:shadow-graphite-900/5">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-graphite-900">
        {temFoto ? (
          <img
            src={`/produtos/${slug}.jpg`}
            alt={nome}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-none stroke-accent"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a5 5 0 0 1-6.7 6.7l-6.9 6.9a2 2 0 0 1-2.8-2.8l6.9-6.9a5 5 0 0 1 6.7-6.7l-3.1 3.1Z"
              />
            </svg>
            <p className="font-display text-sm leading-tight text-white">
              {nome}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-graphite-700">
            {categoriaLabel}
          </p>
          <h3 className="mt-1 font-display text-lg leading-tight text-graphite-900">
            {nome}
          </h3>
          {descricao && (
            <p className="mt-1 text-sm text-graphite-700">{descricao}</p>
          )}
        </div>

        <div className="mt-auto border-t border-graphite-100 pt-3">
          {tipoPreco === "periodo" ? (
            <>
              <p className="font-mono text-2xl font-semibold text-graphite-900">
                {formatBRL(precos.dia)}
                <span className="ml-1 text-sm font-normal text-graphite-700">
                  /dia
                </span>
              </p>
              <dl className="mt-2 space-y-1 text-sm text-graphite-700">
                <div className="flex justify-between">
                  <dt>Semana</dt>
                  <dd className="font-mono text-graphite-900">
                    {formatBRL(precos.semana)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Quinzena</dt>
                  <dd className="font-mono text-graphite-900">
                    {formatBRL(precos.quinzena)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Mês</dt>
                  <dd className="font-mono text-graphite-900">
                    {formatBRL(precos.mes)}
                  </dd>
                </div>
              </dl>
            </>
          ) : (
            <>
              <p className="font-mono text-2xl font-semibold text-graphite-900">
                {formatBRL(precos.dia)}
                <span className="ml-1 text-sm font-normal text-graphite-700">
                  peça/dia
                </span>
              </p>
              <p className="mt-2 text-sm text-graphite-700">
                No plano mensal cai para{" "}
                <strong className="font-mono font-semibold text-graphite-900">
                  {formatBRL(precos.mes)} peça/dia
                </strong>
              </p>
              <details className="mt-2 text-sm text-graphite-700">
                <summary className="cursor-pointer font-medium text-accent-dark">
                  Ver todos os prazos (por peça/dia)
                </summary>
                <dl className="mt-2 space-y-1">
                  <div className="flex justify-between">
                    <dt>Dia</dt>
                    <dd className="font-mono text-graphite-900">
                      {formatBRL(precos.dia)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Semana</dt>
                    <dd className="font-mono text-graphite-900">
                      {formatBRL(precos.semana)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Quinzena</dt>
                    <dd className="font-mono text-graphite-900">
                      {formatBRL(precos.quinzena)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Mês</dt>
                    <dd className="font-mono text-graphite-900">
                      {formatBRL(precos.mes)}
                    </dd>
                  </div>
                </dl>
              </details>
            </>
          )}
        </div>

        <a
          href={linkWhatsApp(mensagemProduto(nome))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-graphite-900 transition-colors hover:bg-accent-dark"
        >
          Alugar no WhatsApp
        </a>
      </div>
    </article>
  );
}
