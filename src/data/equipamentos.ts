export type TipoPreco = "periodo" | "peca";

export type CategoriaId =
	| "andaimes-escoramento"
	| "demolicao-compactacao"
	| "ferramentas-eletricas"
	| "escadas-elevacao"
	| "energia"
	| "concreto-argamassa"
	| "agua-limpeza";

export type Categoria = {
	id: CategoriaId;
	label: string;
};

export const CATEGORIAS: Categoria[] = [
	{ id: "andaimes-escoramento", label: "Andaimes e Escoramento" },
	{ id: "demolicao-compactacao", label: "Demolição e Compactação" },
	{ id: "ferramentas-eletricas", label: "Ferramentas Elétricas" },
	{ id: "escadas-elevacao", label: "Escadas e Elevação" },
	{ id: "energia", label: "Energia" },
	{ id: "concreto-argamassa", label: "Concreto e Argamassa" },
	{ id: "agua-limpeza", label: "Água e Limpeza" },
];

export type Equipamento = {
	slug: string;
	nome: string;
	categoria: CategoriaId;
};

export const EQUIPAMENTOS: Equipamento[] = [
	// Andaimes e Escoramento
	{
		slug: "barra-de-ancoragem",
		nome: "Barra de Ancoragem 0,70m",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "diagonal",
		nome: "Diagonal 1,0m e 1,5m",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "escada-para-andaime",
		nome: "Escada para Andaime 1,0m e 2,0m",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "escora-3,2m",
		nome: "Escora Metálica 3,2m",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "escora-4,5m",
		nome: "Escora Metálica 4,5m",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "painel-metalico",
		nome: "Painel Metálico 1,0m e 1,5m",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "piso-metalico",
		nome: "Piso Metálico 1,0m e 1,5m",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "rodizio-andaime",
		nome: "Rodízio para andaime",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "sapata-ajustavel",
		nome: "Sapata Ajustável",
		categoria: "andaimes-escoramento",
	},
	{
		slug: "sapata-simples",
		nome: "Sapata Simples",
		categoria: "andaimes-escoramento",
	},

	// Demolição e Compactação
	{
		slug: "compactador-de-percussao",
		nome: "Compactador de Percussão",
		categoria: "demolicao-compactacao",
	},
	{
		slug: "guilhotina",
		nome: "Cortadora de Blocos",
		categoria: "demolicao-compactacao",
	},
	{
		slug: "rompedor-4kg",
		nome: "Martelo Rompedor 04Kg",
		categoria: "demolicao-compactacao",
	},
	{
		slug: "demolidor-10kg",
		nome: "Martelo Demolidor 10Kg e 8Kg",
		categoria: "demolicao-compactacao",
	},
	{
		slug: "demolidor-30kg",
		nome: "Martelo Demolidor 30Kg",
		categoria: "demolicao-compactacao",
	},
	{
		slug: "placa-vibratoria",
		nome: "Placa Vibratória",
		categoria: "demolicao-compactacao",
	},

	// Ferramentas Elétricas
	{
		slug: "furadeira-bosch",
		nome: "Furadeira Bosch",
		categoria: "ferramentas-eletricas",
	},
	{
		slug: "furadeira-de-impacto",
		nome: "Furadeira de Impacto",
		categoria: "ferramentas-eletricas",
	},
	{
		slug: "lixadeira-esmerilhadeira",
		nome: "Lixadeira/Esmerilhadeira Bosch 220v",
		categoria: "ferramentas-eletricas",
	},
	{
		slug: "mini-lixadeira",
		nome: "Mini Lixadeira Bosch",
		categoria: "ferramentas-eletricas",
	},
	{
		slug: "parafusadeira-bateria",
		nome: "Parafusadeira e Furadeira Bateria Bosch",
		categoria: "ferramentas-eletricas",
	},
	{
		slug: "serra-circular",
		nome: "Serra Circular / Serra Mármore",
		categoria: "ferramentas-eletricas",
	},

	// Escadas e Elevação
	{
		slug: "escada-aluminio-dobravel",
		nome: "Escada Alumínio Dobrável 4,20m a 7,20m",
		categoria: "escadas-elevacao",
	},
	{
		slug: "escada-extensiva-fibra-de-vidro",
		nome: "Escada Extensiva Fibra de Vidro 4,20m a 7,20m",
		categoria: "escadas-elevacao",
	},
	{
		slug: "escada-cavalete-14-degraus",
		nome: "Escada Cavalete Fibra 3,85m 14 Degraus",
		categoria: "escadas-elevacao",
	},
	{
		slug: "escada-articulada-de-aluminio",
		nome: "Escada Articulada de Alumínio",
		categoria: "escadas-elevacao",
	},
	{
		slug: "guincho-coluna",
		nome: "Guincho de Coluna 350Kg",
		categoria: "escadas-elevacao",
	},

	// Energia
	{
		slug: "gerador-a-gasolina",
		nome: "Gerador a Gasolina 7,6kva e 7,5kva",
		categoria: "energia",
	},
	{
		slug: "extensao-10m",
		nome: "Extensão 10 metros",
		categoria: "energia",
	},
	{
		slug: "extensao-20m",
		nome: "Extensão 20 metros",
		categoria: "energia",
	},
	{
		slug: "extensao-30m",
		nome: "Extensão 30 metros",
		categoria: "energia",
	},
	{
		slug: "extensao-50m",
		nome: "Extensão 50 metros",
		categoria: "energia",
	},

	// Concreto e Argamassa
	{
		slug: "betoneira-400l",
		nome: "Betoneira Monofásica 400L",
		categoria: "concreto-argamassa",
	},
	{
		slug: "peneira-eletrica",
		nome: "Peneira Elétrica",
		categoria: "concreto-argamassa",
	},
	{
		slug: "vibrador-bosch",
		nome: "Vibrador Bosch Mangote de 3,5m",
		categoria: "concreto-argamassa",
	},
	{
		slug: "vibrador-portatil",
		nome: "Vibrador Portátil 25mm Mangote de 1,50m",
		categoria: "concreto-argamassa",
	},

	// Água e Limpeza
	{
		slug: "bomba-dagua-submersivel",
		nome: "Bomba D'água Submersível",
		categoria: "agua-limpeza",
	},
	{
		slug: "motobomba-honda",
		nome: "Motobomba Honda",
		categoria: "agua-limpeza",
	},
	{
		slug: "lavadora-alta-pressao",
		nome: "Lavadora Alta Pressão",
		categoria: "agua-limpeza",
	},
	{
		slug: "cortador-de-grama-eletrico",
		nome: "Cortador de Grama Elétrico",
		categoria: "agua-limpeza",
	},
];
