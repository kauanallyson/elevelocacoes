import EquipamentoList from "@/components/catalogo/EquipamentoList";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import Button from "@/components/ui/Button";
import { EQUIPAMENTOS, type Equipamento } from "@/data/equipamentos";
import { equipamentosComFoto } from "@/lib/produtos";

const PREVIA = ["escora", "painel-metalico", "barra-de-ancoragem", "betoneira"];

export default function HomePage() {
	const previaEquipamentos = equipamentosComFoto(
		PREVIA.map((slug) =>
			EQUIPAMENTOS.find((equipamento) => equipamento.slug === slug),
		).filter(
			(equipamento): equipamento is Equipamento => equipamento !== undefined,
		),
	);

	return (
		<>
			<Header />
			<main>
				<Hero />
				<section id="catalogo" className="bg-white py-8 sm:py-16">
					<div className="mx-auto max-w-6xl px-4 sm:px-6">
						<div className="max-w-2xl">
							<h2 className="font-mono font-medium uppercase text-accent-contrast text-2xl">
								Catálogo
							</h2>
						</div>

						<EquipamentoList
							className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4"
							equipamentos={previaEquipamentos}
						/>

						<div className="mt-8 flex justify-center">
							<Button href="/catalogo" variant="secondary">
								Ver catálogo completo
							</Button>
						</div>
					</div>
				</section>
				<Contact />
			</main>
			<Footer />
			<WhatsAppButton />
		</>
	);
}
