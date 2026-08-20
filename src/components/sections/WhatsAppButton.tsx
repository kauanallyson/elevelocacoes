import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { linkWhatsApp, MENSAGEM_GERAL } from "@/lib/whatsapp";

export default function WhatsAppButton() {
	return (
		<a
			href={linkWhatsApp(MENSAGEM_GERAL)}
			target="_blank"
			rel="noopener noreferrer"
			data-pixel="whatsapp"
			className="fixed right-5 bottom-[calc(var(--cookie-offset,0px)+1.25rem)] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-graphite-900 shadow-lg shadow-graphite-900/20 transition-[transform,bottom] hover:scale-105 sm:right-6 sm:bottom-[calc(var(--cookie-offset,0px)+1.5rem)]"
			aria-label="Chamar a Eleve Locações no WhatsApp"
		>
			<WhatsAppIcon className="h-7 w-7" />
		</a>
	);
}
