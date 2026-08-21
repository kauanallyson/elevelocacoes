import type { Metadata } from "next";
import WrenchIcon from "@/components/icons/WrenchIcon";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
	titulo: "Página não encontrada | Eleve Locações",
	descricao:
		"A página que você procura não existe. Confira nosso catálogo de andaimes, escoras, betoneiras e outros equipamentos para locação em Sobral-CE.",
});

export default function NotFound() {
	return (
		<>
			<Header />
			<main>
				<section className="flex min-h-[calc(100vh-4rem)] items-center bg-white py-20 sm:py-28">
					<div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 text-center sm:px-6">
						<div className="flex h-16 w-16 items-center justify-center rounded-md border border-graphite-100 bg-white">
							<WrenchIcon />
						</div>
						<p className="font-mono text-sm font-medium uppercase tracking-[0.25em] text-accent-contrast">
							Erro 404
						</p>
						<h1 className="font-display text-4xl leading-tight text-graphite-900 sm:text-5xl">
							Página não encontrada
						</h1>
						<p className="max-w-md text-graphite-700">
							O endereço acessado não existe ou foi movido. Que tal conferir
							nosso catálogo completo de equipamentos ou voltar para o
							início?
						</p>
						<div className="mt-4 flex flex-wrap items-center justify-center gap-4">
							<Button href="/" size="lg">
								Voltar ao início
							</Button>
							<Button href="/catalogo" variant="secondary" size="lg">
								Ver catálogo
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
			<WhatsAppButton />
		</>
	);
}
