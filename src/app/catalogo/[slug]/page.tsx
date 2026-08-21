import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VoltarAoCatalogo from "@/components/catalogo/VoltarAoCatalogo";
import WrenchIcon from "@/components/icons/WrenchIcon";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink";
import { CATEGORIAS, EQUIPAMENTOS } from "@/data/equipamentos";
import { equipamentosComFoto } from "@/lib/produtos";
import { buildMetadata } from "@/lib/seo";
import { mensagemProduto } from "@/lib/whatsapp";

const RELACIONADOS_LIMITE = 4;

type Props = {
	params: Promise<{ slug: string }>;
};

const categoriaLabelPorId = new Map(
	CATEGORIAS.map((c) => [c.id, c.label] as const),
);

function getEquipamento(slug: string) {
	return equipamentosComFoto(EQUIPAMENTOS).find(
		(equipamento) => equipamento.slug === slug,
	);
}

export function generateStaticParams() {
	return EQUIPAMENTOS.map((equipamento) => ({ slug: equipamento.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const equipamento = getEquipamento(slug);

	if (!equipamento) {
		return buildMetadata();
	}

	return buildMetadata({
		titulo: `${equipamento.nome} | Eleve Locações`,
		descricao: equipamento.descricao.join(" "),
		path: `/catalogo/${equipamento.slug}`,
		...(equipamento.temFoto
			? { imagem: `/produtos/${equipamento.slug}.webp` }
			: {}),
	});
}

export default async function EquipamentoPage({ params }: Props) {
	const { slug } = await params;
	const equipamento = getEquipamento(slug);

	if (!equipamento) {
		notFound();
	}

	const { nome, descricao, categoria, temFoto } = equipamento;

	const relacionados = equipamentosComFoto(EQUIPAMENTOS)
		.filter((item) => item.categoria === categoria && item.slug !== slug)
		.slice(0, RELACIONADOS_LIMITE);

	return (
		<>
			<Header />
			<main>
				<section className="bg-white py-4 sm:py-8">
					<div className="mx-auto max-w-4xl px-4 sm:px-6">
						<VoltarAoCatalogo />

						<p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-graphite-700">
							{categoriaLabelPorId.get(categoria) ?? categoria}
						</p>
						<h1 className="mt-1 font-display text-3xl leading-tight text-graphite-900 sm:text-4xl">
							{nome}
						</h1>

						<div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
							<div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-md bg-graphite-900 sm:w-3/5">
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

							<div className="flex flex-col gap-6 sm:flex-1 sm:self-center">
								<div className="flex flex-col gap-3 text-graphite-700">
									<p>{descricao[0]}</p>
									<p>{descricao[1]}</p>
								</div>

								<WhatsAppLink
									mensagem={mensagemProduto(nome)}
									className="w-full sm:w-auto"
								>
									Quero um orçamento
								</WhatsAppLink>
							</div>
						</div>

						{relacionados.length > 0 ? (
							<div className="mt-12 border-t border-graphite-100 pt-8">
								<h2 className="font-mono text-xs uppercase tracking-wide text-graphite-700">
									Outros equipamentos dessa categoria
								</h2>
								<ul className="mt-4 flex flex-col gap-2">
									{relacionados.map((item) => (
										<li key={item.slug}>
											<Link
												href={`/catalogo/${item.slug}`}
												className="text-graphite-900 underline decoration-graphite-300 underline-offset-4 transition-colors hover:text-accent-dark"
											>
												{item.nome}
											</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				</section>
			</main>
			<Footer />
			<WhatsAppButton />
		</>
	);
}
