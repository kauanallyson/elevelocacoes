export const WHATSAPP_NUMBER = "5588999983050";

export const MENSAGEM_GERAL =
	"Olá! Gostaria de um orçamento de locação de equipamentos.";

export function mensagemProduto(nome: string) {
	return `Olá! Vi no site e quero alugar: ${nome}. Qual a disponibilidade?`;
}

export function linkWhatsApp(mensagem: string) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}
