import type { Metadata } from "next";
import { Suspense } from "react";
import Catalogo from "@/components/catalogo/Catalogo";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import { EQUIPAMENTOS } from "@/data/equipamentos";
import { equipamentosComFoto } from "@/lib/produtos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
	titulo: "Catálogo de equipamentos | Eleve Locações",
	descricao:
		"Confira o catálogo completo de andaimes, betoneiras, martelos demolidores, geradores e outros equipamentos para locação em Sobral-CE.",
	path: "/catalogo",
});

export default function CatalogoPage() {
	const equipamentos = equipamentosComFoto(EQUIPAMENTOS);

	return (
		<>
			<Header />
			<main>
				<Suspense fallback={null}>
					<Catalogo equipamentos={equipamentos} />
				</Suspense>
			</main>
			<Footer />
			<WhatsAppButton />
		</>
	);
}
