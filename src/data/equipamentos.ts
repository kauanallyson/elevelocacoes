export type TipoPreco = "periodo" | "peca";

export type CategoriaId =
	| "andaimes-escoramento"
	| "demolicao-compactacao"
	| "ferramentas-eletricas"
	| "escadas-elevacao"
	| "energia"
	| "concreto"
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
	{ id: "concreto", label: "Concreto" },
	{ id: "agua-limpeza", label: "Água e Limpeza" },
];

export type Equipamento = {
	slug: string;
	nome: string;
	categoria: CategoriaId;
	descricao: [string, string];
};

export const EQUIPAMENTOS: Equipamento[] = [
	// Andaimes e Escoramento
	{
		slug: "barra-de-ancoragem",
		nome: "Barra de Ancoragem 0,70m",
		categoria: "andaimes-escoramento",
		descricao: [
			"Fixa o andaime na parede em obras com mais de um pavimento, travando a estrutura e evitando que ela balance ou se afaste da fachada.",
			"É item obrigatório em montagens acima de dois módulos de altura, exigido pelas normas de segurança para andaimes tubulares.",
		],
	},
	{
		slug: "diagonal",
		nome: "Diagonal 1,0m e 1,5m",
		categoria: "andaimes-escoramento",
		descricao: [
			"Faz o contraventamento entre os quadros do andaime tubular, travando a estrutura na diagonal e evitando que ela balance ou perca prumo durante o uso.",
			"Disponível nos comprimentos de 1,0m e 1,5m, é peça essencial para dar rigidez e segurança à montagem completa.",
		],
	},
	{
		slug: "escada-para-andaime",
		nome: "Escada para Andaime 1,0m e 2,0m",
		categoria: "andaimes-escoramento",
		descricao: [
			"Escada interna que encaixa direto na estrutura do andaime, permitindo subir entre os módulos com apoio firme e sem precisar sair pela lateral.",
			"Vem nos tamanhos de 1,0m e 2,0m e ajuda na circulação segura em obras com vários pavimentos de andaime montado.",
		],
	},
	{
		slug: "escora",
		nome: "Escora Metálica 3,2m ou 4,5m",
		categoria: "andaimes-escoramento",
		descricao: [
			"Sustenta lajes e formas de concreto até a cura completa, com regulagem de altura para se ajustar ao pé-direito da obra.",
			"Disponível nos modelos de 3,2m ou 4,5m, é usada em conjunto com outras escoras para distribuir o peso da estrutura com segurança.",
		],
	},
	{
		slug: "painel-metalico",
		nome: "Painel Metálico 1,0m e 1,5m",
		categoria: "andaimes-escoramento",
		descricao: [
			"Módulo principal do andaime tubular, encaixa com sapatas, diagonais e piso metálico para formar a estrutura completa.",
			"Vem nos tamanhos de 1,0m e 1,5m e é a peça que dá altura e formato ao andaime, permitindo montar torres de diferentes tamanhos conforme a obra.",
		],
	},
	{
		slug: "piso-metalico",
		nome: "Piso Metálico 1,0m e 1,5m",
		categoria: "andaimes-escoramento",
		descricao: [
			"Plataforma de trabalho que se encaixa nos painéis do andaime, com trava de segurança para não sair do lugar durante o uso.",
			"Disponível em 1,0m e 1,5m, oferece uma superfície firme e antiderrapante para o trabalhador circular e apoiar ferramentas com segurança em altura.",
		],
	},
	{
		slug: "rodizio-andaime",
		nome: "Rodízio para andaime",
		categoria: "andaimes-escoramento",
		descricao: [
			"Roda giratória com freio que se encaixa na base do andaime, transformando a estrutura fixa em uma torre rolante fácil de deslocar dentro da obra.",
			"Serve bem para trabalhos que exigem movimentação frequente, como pintura e reboco, evitando montar e desmontar o andaime várias vezes.",
		],
	},
	{
		slug: "sapata-ajustavel",
		nome: "Sapata Ajustável",
		categoria: "andaimes-escoramento",
		descricao: [
			"Base com rosca que permite regular a altura do andaime para nivelar a estrutura em piso irregular ou em desnível.",
			"Gira manualmente até encontrar o ponto certo de apoio, garantindo que o andaime fique nivelado e estável mesmo em terrenos que não são totalmente planos.",
		],
	},
	{
		slug: "sapata-simples",
		nome: "Sapata Simples",
		categoria: "andaimes-escoramento",
		descricao: [
			"Base fixa que serve de apoio para o andaime em piso já nivelado, distribuindo o peso da estrutura de forma uniforme sobre o chão.",
			"É a opção mais simples entre as sapatas, usada quando não há necessidade de ajuste de altura ou correção de nível.",
		],
	},

	// Concreto e Argamassa
	{
		slug: "molde-corpo-de-prova",
		nome: "Molde para corpos de prova",
		categoria: "concreto",
		descricao: [
			"Molde cilíndrico usado para moldar corpos de prova de concreto, essenciais para testar a resistência do material em laboratório.",
			"É item comum em obras que exigem controle tecnológico do concreto, garantindo que a mistura aplicada atenda às especificações do projeto estrutural.",
		],
	},
	{
		slug: "betoneira",
		nome: "Betoneira Monofásica 400L",
		categoria: "concreto",
		descricao: [
			"Mistura concreto e argamassa direto na obra, com tambor de 400 litros e motor monofásico que liga na tomada comum.",
			"Reduz bastante o esforço manual de misturar cimento, areia e brita na pá, entregando uma mistura mais homogênea em menos tempo de trabalho.",
		],
	},
	{
		slug: "peneira-eletrica",
		nome: "Peneira Elétrica",
		categoria: "concreto",
		descricao: [
			"Peneira areia e brita de forma elétrica, deixando o material mais fino e uniforme para preparar argamassa de reboco e assentamento.",
			"Elimina o trabalho manual de peneirar com a mão, agilizando o preparo de materiais e melhorando o acabamento final do serviço.",
		],
	},
	{
		slug: "vibrador-bosch",
		nome: "Vibrador Bosch Mangote de 3,5m",
		categoria: "concreto",
		descricao: [
			"Adensa o concreto lançado em formas e lajes, com mangote de 3,5m que alcança pontos mais distantes da obra.",
			"Evita a formação de bolhas de ar e ninhos de concreto, garantindo uma peça mais resistente e com acabamento mais uniforme depois da desforma.",
		],
	},
	{
		slug: "vibrador-portatil",
		nome: "Vibrador Portátil 25mm Mangote de 1,50m",
		categoria: "concreto",
		descricao: [
			"Vibrador de imersão compacto, com mangote de 25mm e 1,50m, indicado para peças menores como pilares, vigas estreitas e reforços estruturais.",
			"Sua ponta fina alcança espaços apertados entre ferragens, ajudando a eliminar bolhas de ar sem danificar a armação do concreto.",
		],
	},

	// Demolição e Compactação
	{
		slug: "compactador-de-percussao",
		nome: "Compactador de Percussão",
		categoria: "demolicao-compactacao",
		descricao: [
			"Compacta solo e valas antes da concretagem, batendo verticalmente com percussão para adensar terra solta ou aterro.",
			"Muito usado em fundações, calçadas e reaterros de valas de tubulação, deixando o solo mais firme e reduzindo o risco de recalque depois da obra pronta.",
		],
	},
	{
		slug: "guilhotina",
		nome: "Cortadora de Blocos",
		categoria: "demolicao-compactacao",
		descricao: [
			"Corta blocos, tijolos e lajotas com precisão, sem gerar poeira nem depender de energia elétrica como no disco de corte.",
			"Funciona por pressão mecânica, deixando um corte limpo e reto, útil para ajustes de medida em alvenaria sem desperdiçar material nem sujar o canteiro.",
		],
	},
	{
		slug: "rompedor-4kg",
		nome: "Martelo Rompedor 04Kg",
		categoria: "demolicao-compactacao",
		descricao: [
			"Martelete leve para quebrar revestimento, piso, contrapiso e fazer pequenas demolições em reformas.",
			"Seu peso reduzido facilita o manuseio em trabalhos verticais e em espaços apertados, sendo uma boa escolha para serviços que não exigem a força de um martelo demolidor maior.",
		],
	},
	{
		slug: "demolidor-10kg",
		nome: "Martelo Demolidor 10Kg e 8Kg",
		categoria: "demolicao-compactacao",
		descricao: [
			"Martelo demolidor para quebrar concreto simples e alvenaria em serviços de médio porte, como retirada de contrapiso e abertura de vãos.",
			"Com peso de 8 ou 10Kg, equilibra força de impacto e facilidade de manuseio, sendo uma das ferramentas mais usadas em reformas.",
		],
	},
	{
		slug: "demolidor-30kg",
		nome: "Martelo Demolidor 30Kg",
		categoria: "demolicao-compactacao",
		descricao: [
			"Martelo demolidor pesado, indicado para concreto armado e demolições de grande porte, como quebra de vigas, pilares e lajes estruturais.",
			"Exige mais força para operar, mas entrega um impacto muito maior, reduzindo o tempo de trabalho em demolições mais robustas na obra.",
		],
	},
	{
		slug: "placa-vibratoria",
		nome: "Placa Vibratória",
		categoria: "demolicao-compactacao",
		descricao: [
			"Compacta solo, brita e asfalto em áreas maiores, como calçadas, pátios e bases para pavimentação.",
			"A vibração da placa uniformiza a compactação em toda a superfície, deixando o terreno mais firme e nivelado antes de receber piso, contrapiso ou revestimento asfáltico.",
		],
	},

	// Ferramentas Elétricas
	{
		slug: "furadeira-bosch",
		nome: "Furadeira Bosch",
		categoria: "ferramentas-eletricas",
		descricao: [
			"Furadeira robusta para perfurar concreto, alvenaria e metal, usada tanto para furos de fixação quanto para trabalhos de montagem em geral.",
			"Tem potência suficiente para o uso diário em obra, sendo uma das ferramentas elétricas mais requisitadas para locação em canteiros de construção.",
		],
	},
	{
		slug: "furadeira-de-impacto",
		nome: "Furadeira de Impacto",
		categoria: "ferramentas-eletricas",
		descricao: [
			"Furadeira com função de impacto para furos em alvenaria, concreto e blocos mais resistentes, combinando rotação e martelamento.",
			"Facilita a fixação de buchas, parafusos e suportes em paredes duras, sendo mais indicada que a furadeira comum para esse tipo de serviço.",
		],
	},
	{
		slug: "lixadeira-esmerilhadeira",
		nome: "Lixadeira/Esmerilhadeira Bosch 220v",
		categoria: "ferramentas-eletricas",
		descricao: [
			"Lixa, corta e desbasta metal e concreto, funcionando com disco de 220v conforme o acessório utilizado.",
			"Serve tanto para acabamento de solda quanto para corte de barras de ferro e desbaste de superfícies, sendo uma ferramenta versátil para diferentes etapas da obra.",
		],
	},
	{
		slug: "mini-lixadeira",
		nome: "Mini Lixadeira Bosch",
		categoria: "ferramentas-eletricas",
		descricao: [
			"Versão compacta da esmerilhadeira, indicada para cortes e acabamentos em espaços apertados onde a ferramenta maior não alcança bem.",
			"Seu tamanho reduzido facilita o manuseio em detalhes e trabalhos de precisão, sem perder potência para cortar metal e outros materiais resistentes.",
		],
	},
	{
		slug: "parafusadeira-bateria",
		nome: "Parafusadeira e Furadeira Bateria Bosch",
		categoria: "ferramentas-eletricas",
		descricao: [
			"Fura e aparafusa sem fio, com bateria recarregável que dá liberdade de movimento em qualquer parte da obra.",
			"Boa para montagem de móveis, fixação de gesso, drywall e outros serviços de acabamento que exigem agilidade e não precisam de tanta força de perfuração.",
		],
	},
	{
		slug: "serra-circular",
		nome: "Serra Circular / Serra Mármore",
		categoria: "ferramentas-eletricas",
		descricao: [
			"Corta madeira, mármore e granito dependendo do disco usado, sendo uma ferramenta versátil para diferentes etapas da obra e do acabamento.",
			"Facilita cortes retos e precisos em chapas e placas, substituindo o corte manual e ganhando tempo em serviços de marcenaria e revestimento.",
		],
	},

	// Escadas e Elevação
	{
		slug: "escada-aluminio-dobravel",
		nome: "Escada Alumínio Dobrável 4,20m a 7,20m",
		categoria: "escadas-elevacao",
		descricao: [
			"Escada telescópica em alumínio que se ajusta de 4,20m a 7,20m, dobrando para um tamanho compacto e fácil de transportar no carro ou na obra.",
			"Leve mas resistente, serve para pintura, poda, manutenção elétrica e outros serviços que exigem alcançar alturas variadas.",
		],
	},
	{
		slug: "escada-extensiva-fibra-de-vidro",
		nome: "Escada Extensiva Fibra de Vidro 4,20m a 7,20m",
		categoria: "escadas-elevacao",
		descricao: [
			"Escada extensiva em fibra de vidro, material isolante que não conduz eletricidade, o que a torna mais segura para trabalhos próximos à rede elétrica.",
			"Ajusta de 4,20m a 7,20m e é bastante usada por eletricistas e equipes de manutenção em fachadas e postes.",
		],
	},
	{
		slug: "escada-cavalete-14-degraus",
		nome: "Escada Cavalete Fibra 3,85m 14 Degraus",
		categoria: "escadas-elevacao",
		descricao: [
			"Escada cavalete em fibra, com 3,85m de altura e 14 degraus, oferecendo boa estabilidade por se apoiar sozinha, sem precisar encostar em paredes.",
			"Indicada para pintura, forro e serviços internos onde não há superfície de apoio disponível para uma escada reta comum.",
		],
	},
	{
		slug: "escada-articulada-de-aluminio",
		nome: "Escada Articulada de Alumínio",
		categoria: "escadas-elevacao",
		descricao: [
			"Escada multifunção que se ajusta em várias posições, como reta, cavalete, degraus ou escada com plataforma, tudo na mesma peça.",
			"Prática para quem precisa de flexibilidade em diferentes tarefas, já que substitui várias escadas por uma única estrutura articulada e compacta.",
		],
	},
	{
		slug: "guincho-coluna",
		nome: "Guincho de Coluna 350Kg",
		categoria: "escadas-elevacao",
		descricao: [
			"Guincho elétrico de coluna, usado para içar material de construção até andares superiores sem depender de força humana.",
			"Suporta até 350Kg e é fixado em uma coluna de apoio, agilizando o transporte de sacos de cimento, blocos e outros materiais pesados pela obra.",
		],
	},

	// Energia
	{
		slug: "gerador-a-gasolina",
		nome: "Gerador a Gasolina 7,6kva e 7,5kva",
		categoria: "energia",
		descricao: [
			"Gerador a gasolina com potência de 7,5 a 7,6 kva, usado para levar energia a obras onde ainda não há ligação da rede elétrica.",
			"Alimenta ferramentas, iluminação e equipamentos elétricos do canteiro, sendo essencial em terrenos afastados ou em fase inicial de construção.",
		],
	},
	{
		slug: "extensao",
		nome: "Extensão 10-50 metros",
		categoria: "energia",
		descricao: [
			"Cabo extensor que vai de 10 a 50 metros, levando energia até onde a tomada não alcança dentro do terreno ou da obra.",
			"Facilita o uso de ferramentas elétricas em pontos distantes do quadro de energia, sem precisar improvisar emendas ou fiação provisória.",
		],
	},

	// Água e Limpeza
	{
		slug: "bomba-dagua-submersivel",
		nome: "Bomba D'água Submersível",
		categoria: "agua-limpeza",
		descricao: [
			"Retira água de poços, valas e áreas alagadas, funcionando totalmente submersa dentro do próprio líquido que está sendo bombeado.",
			"Muito usada para esgotar fundações antes da concretagem ou drenar terrenos encharcados depois de chuva forte, evitando atraso no cronograma da obra.",
		],
	},
	{
		slug: "motobomba-honda",
		nome: "Motobomba Honda",
		categoria: "agua-limpeza",
		descricao: [
			"Motobomba a combustão usada para irrigação, esgotamento de água em obra e transferência de grandes volumes de líquido de um ponto a outro.",
			"Não depende de energia elétrica para funcionar, o que a torna útil em locais afastados ou sem ligação de rede disponível.",
		],
	},
	{
		slug: "lavadora-alta-pressao",
		nome: "Lavadora Alta Pressão",
		categoria: "agua-limpeza",
		descricao: [
			"Lava fachadas, pisos, telhados e equipamentos com jato de alta pressão, removendo sujeira pesada, mofo e resíduos de obra sem precisar esfregar.",
			"Agiliza a limpeza final de canteiros e a manutenção de áreas externas, entregando um resultado mais rápido que a lavagem manual.",
		],
	},
	{
		slug: "cortador-de-grama-eletrico",
		nome: "Cortador de Grama Elétrico",
		categoria: "agua-limpeza",
		descricao: [
			"Corta e apara grama de jardins e áreas externas, com motor elétrico que dispensa combustível e reduz o barulho durante o uso.",
			"Boa opção para manutenção de terrenos, entrega de obra e paisagismo em áreas residenciais e comerciais de pequeno e médio porte.",
		],
	},
];
