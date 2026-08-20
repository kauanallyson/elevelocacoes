import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import WhatsAppLink from "@/components/whatsapp/WhatsAppLink";

export default function WhatsAppButton() {
	return (
		<WhatsAppLink
			variant="unstyled"
			className="fixed right-5 bottom-[calc(var(--cookie-offset,0px)+1.25rem)] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-graphite-900 shadow-lg shadow-graphite-900/20 transition-[transform,bottom] hover:scale-105 sm:right-6 sm:bottom-[calc(var(--cookie-offset,0px)+1.5rem)]"
			aria-label="Chamar a Eleve Locações no WhatsApp"
		>
			<WhatsAppIcon className="h-7 w-7" />
		</WhatsAppLink>
	);
}
