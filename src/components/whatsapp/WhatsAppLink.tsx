"use client";

import type { MouseEvent } from "react";
import Button, { type ButtonProps } from "@/components/ui/Button";
import { track } from "@/lib/tracking";
import { linkWhatsApp, MENSAGEM_GERAL } from "@/lib/whatsapp";

type Props = Omit<
	Extract<ButtonProps, { href: string }>,
	"href" | "target" | "rel"
> & {
	mensagem?: string;
};

export default function WhatsAppLink({
	mensagem = MENSAGEM_GERAL,
	onClick,
	...rest
}: Props) {
	return (
		<Button
			href={linkWhatsApp(mensagem)}
			target="_blank"
			rel="noopener noreferrer"
			onClick={(event: MouseEvent<HTMLAnchorElement>) => {
				track("whatsapp_cta");
				onClick?.(event);
			}}
			{...rest}
		/>
	);
}
