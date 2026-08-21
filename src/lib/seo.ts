import type { Metadata } from "next";

export const SITE_URL = "https://elevelocacoes.com.br";

export const TITULO_PADRAO =
	"Eleve Locações | Aluguel de Andaimes, Escoras e Betoneiras em Sobral-CE";
export const DESCRICAO_PADRAO =
	"Locação de andaimes, escoras, betoneiras, martelos demolidores, geradores e outros equipamentos para construção civil em Sobral, Tianguá, Preá e Camocim-CE.";

export function buildMetadata({
	titulo = TITULO_PADRAO,
	descricao = DESCRICAO_PADRAO,
	path = "/",
	imagem = "/og-image.png",
}: {
	titulo?: string;
	descricao?: string;
	path?: string;
	imagem?: string;
} = {}): Metadata {
	const url = new URL(path, SITE_URL).toString();
	const imagemUrl = new URL(imagem, SITE_URL).toString();

	return {
		title: titulo,
		description: descricao,
		alternates: { canonical: url },
		openGraph: {
			type: "website",
			locale: "pt_BR",
			title: titulo,
			description: descricao,
			url,
			images: [{ url: imagemUrl, width: 1080, height: 1080 }],
		},
		twitter: {
			card: "summary_large_image",
			title: titulo,
			description: descricao,
			images: [imagemUrl],
		},
	};
}
