import Button, { type ButtonProps } from "@/components/ui/Button";
import { linkWhatsApp, MENSAGEM_GERAL } from "@/lib/whatsapp";

type Props = Omit<
	Extract<ButtonProps, { href: string }>,
	"href" | "target" | "rel"
> & {
	mensagem?: string;
};

export default function WhatsAppLink({
	mensagem = MENSAGEM_GERAL,
	...rest
}: Props) {
	return (
		<Button
			href={linkWhatsApp(mensagem)}
			target="_blank"
			rel="noopener noreferrer"
			data-pixel="whatsapp"
			{...rest}
		/>
	);
}
