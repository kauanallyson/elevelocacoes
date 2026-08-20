import Image from "next/image";
import logoHorizontal from "@/assets/logo3x1-no-bg-gray.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Button from "@/components/ui/Button";
import { linkWhatsApp, MENSAGEM_GERAL } from "@/lib/whatsapp";

const links = [
	{ href: "/", label: "Início" },
	{ href: "/catalogo", label: "Catálogo" },
	{ href: "/#contato", label: "Contato" },
];

export default function Header() {
	return (
		<header className="sticky inset-x-0 top-0 z-40 border-b border-graphite-100 bg-white/95 backdrop-blur">
			<div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
				<a href="/" className="shrink-0">
					<Image
						src={logoHorizontal}
						alt="Eleve Locações de Equipamentos"
						className="h-12 w-auto"
						loading="lazy"
					/>
				</a>

				<nav
					className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
					aria-label="Navegação principal"
				>
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-graphite-700 transition-colors hover:text-accent-dark"
						>
							{link.label}
						</a>
					))}
				</nav>

				<Button
					href={linkWhatsApp(MENSAGEM_GERAL)}
					target="_blank"
					rel="noopener noreferrer"
					data-pixel="whatsapp"
					size="sm"
					className="shrink-0 gap-2"
				>
					<WhatsAppIcon />
					<span>Fale conosco</span>
				</Button>
			</div>
		</header>
	);
}
