import Image from "next/image";
import logoHorizontal from "@/assets/logo3x1-no-bg.png";
import Button from "@/components/ui/Button";
import { linkWhatsApp, MENSAGEM_GERAL } from "@/lib/whatsapp";

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-graphite-900 py-12 sm:py-16">
			<div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:items-stretch">
				<div>
					<p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
						Sobral, Tianguá, Preá, Camocim e região
					</p>
					<h1 className="mt-5 font-display text-5xl leading-none text-white sm:text-6xl">
						Aluguel de Escoras, Andaimes, Betoneiras
						<span className="block text-accent">e Muito Mais.</span>
					</h1>
					<p className="mt-6 max-w-xl text-base leading-relaxed sm:text-[18px]">
						Maior frota de escoras e andaimes da região, equipamentos
						certificados e atendimento com agilidade.
					</p>

					<div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
						<Button href="/catalogo" size="lg">
							Ver catálogo
						</Button>
						<Button
							href={linkWhatsApp(MENSAGEM_GERAL)}
							target="_blank"
							rel="noopener noreferrer"
							data-pixel="whatsapp"
							variant="secondary-dark"
							size="lg"
						>
							Entre em contato
						</Button>
					</div>
				</div>

				<div className="flex flex-col justify-between border-t border-graphite-700 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
					<div className="hidden flex-1 items-center justify-center py-6 sm:flex lg:py-8">
						<Image
							src={logoHorizontal}
							alt="Eleve Locações de Equipamentos"
							className="w-full max-w-md rounded-sm hidden lg:block lg:max-w-lg"
							loading="eager"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
