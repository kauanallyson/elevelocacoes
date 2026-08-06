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
  tipoPreco: TipoPreco;
  precos: { dia: number; semana: number; quinzena: number; mes: number };
  descricao?: string;
};

export const EQUIPAMENTOS: Equipamento[] = [
  // Andaimes e Escoramento - peça/dia
  {
    slug: "barra-de-ancoragem",
    nome: "Barra de Ancoragem 0,70m",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 4.0, semana: 0.6, quinzena: 0.35, mes: 0.3 },
  },
  {
    slug: "diagonal",
    nome: "Diagonal 1,0m e 1,5m",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 0.8, semana: 0.6, quinzena: 0.4, mes: 0.3 },
  },
  {
    slug: "escada-para-andaime",
    nome: "Escada para Andaime 1,0m e 2,0m",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 2.0, semana: 1.0, quinzena: 0.8, mes: 0.6 },
  },
  {
    slug: "escora-3,2m",
    nome: "Escora Metálica 3,2m",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 6.0, semana: 1.4, quinzena: 1.0, mes: 0.6 },
  },
  {
    slug: "escora-4,5m",
    nome: "Escora Metálica 4,5m",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 7.0, semana: 1.8, quinzena: 1.2, mes: 0.7 },
  },
  {
    slug: "painel-metalico",
    nome: "Painel Metálico 1,0m e 1,5m",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 6.0, semana: 1.4, quinzena: 1.0, mes: 0.6 },
  },
  {
    slug: "piso-metalico",
    nome: "Piso Metálico 1,0m e 1,5m",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 6.0, semana: 1.4, quinzena: 1.0, mes: 0.6 },
  },
  {
    slug: "rodizio-andaime",
    nome: "Rodízio",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 6.0, semana: 1.5, quinzena: 1.0, mes: 0.6 },
  },
  {
    slug: "sapata-ajustavel",
    nome: "Sapata Ajustável",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 2.5, semana: 1.0, quinzena: 0.6, mes: 0.5 },
  },
  {
    slug: "sapata-simples",
    nome: "Sapata Simples",
    categoria: "andaimes-escoramento",
    tipoPreco: "peca",
    precos: { dia: 1.5, semana: 0.8, quinzena: 0.5, mes: 0.4 },
  },

  // Demolição e Compactação
  {
    slug: "compactador-de-percussao",
    nome: "Compactador de Percussão",
    categoria: "demolicao-compactacao",
    tipoPreco: "periodo",
    precos: { dia: 200.0, semana: 910.0, quinzena: 1650.0, mes: 3000.0 },
  },
  {
    slug: "cortadora-de-blocos",
    nome: "Cortadora de Blocos",
    categoria: "demolicao-compactacao",
    tipoPreco: "periodo",
    precos: { dia: 60.0, semana: 280.0, quinzena: 375.0, mes: 450.0 },
  },
  {
    slug: "rompedor-4kg",
    nome: "Martelo Rompedor 04Kg",
    categoria: "demolicao-compactacao",
    tipoPreco: "periodo",
    precos: { dia: 60.0, semana: 280.0, quinzena: 450.0, mes: 600.0 },
  },
  {
    slug: "demolidor-10kg",
    nome: "Martelo Demolidor 10Kg e 8Kg",
    categoria: "demolicao-compactacao",
    tipoPreco: "periodo",
    precos: { dia: 125.0, semana: 490.0, quinzena: 675.0, mes: 750.0 },
  },
  {
    slug: "demolidor-30kg",
    nome: "Martelo Demolidor 30Kg",
    categoria: "demolicao-compactacao",
    tipoPreco: "periodo",
    precos: { dia: 165.0, semana: 770.0, quinzena: 1200.0, mes: 1200.0 },
  },
  {
    slug: "placa-vibratoria",
    nome: "Placa Vibratória",
    categoria: "demolicao-compactacao",
    tipoPreco: "periodo",
    precos: { dia: 165.0, semana: 770.0, quinzena: 1200.0, mes: 1200.0 },
  },

  // Ferramentas Elétricas
  {
    slug: "furadeira-bosch",
    nome: "Furadeira Bosch",
    categoria: "ferramentas-eletricas",
    tipoPreco: "periodo",
    precos: { dia: 30.0, semana: 140.0, quinzena: 150.0, mes: 210.0 },
  },
  {
    slug: "furadeira-de-impacto",
    nome: "Furadeira de Impacto",
    categoria: "ferramentas-eletricas",
    tipoPreco: "periodo",
    precos: { dia: 30.0, semana: 140.0, quinzena: 150.0, mes: 210.0 },
  },
  {
    slug: "lixadeira-esmerilhadeira",
    nome: "Lixadeira/Esmerilhadeira Bosch 220v",
    categoria: "ferramentas-eletricas",
    tipoPreco: "periodo",
    precos: { dia: 65.0, semana: 160.0, quinzena: 225.0, mes: 255.0 },
  },
  {
    slug: "mini-lixadeira",
    nome: "Mini Lixadeira Bosch",
    categoria: "ferramentas-eletricas",
    tipoPreco: "periodo",
    precos: { dia: 55.0, semana: 125.0, quinzena: 170.0, mes: 225.0 },
  },
  {
    slug: "parafusadeira-bateria",
    nome: "Parafusadeira e Furadeira Bateria Bosch",
    categoria: "ferramentas-eletricas",
    tipoPreco: "periodo",
    precos: { dia: 25.0, semana: 105.0, quinzena: 105.0, mes: 150.0 },
  },
  {
    slug: "serra-circular",
    nome: "Serra Circular e Serra Mármore",
    categoria: "ferramentas-eletricas",
    tipoPreco: "periodo",
    precos: { dia: 40.0, semana: 175.0, quinzena: 300.0, mes: 360.0 },
  },

  // Escadas e Elevação
  {
    slug: "escada-aluminio-dobravel",
    nome: "Escada Alumínio Dobrável 4,20 a 7,20",
    categoria: "escadas-elevacao",
    tipoPreco: "periodo",
    precos: { dia: 50.0, semana: 140.0, quinzena: 225.0, mes: 240.0 },
  },
  {
    slug: "escada-extensiva-fibra-de-vidro",
    nome: "Escada Extensiva Fibra de Vidro 4,20 a 7,20",
    categoria: "escadas-elevacao",
    tipoPreco: "periodo",
    precos: { dia: 50.0, semana: 140.0, quinzena: 225.0, mes: 240.0 },
  },
  {
    slug: "escada-cavalete-14-degraus",
    nome: "Escada Cavalete Fibra 3,85m 14 Degraus",
    categoria: "escadas-elevacao",
    tipoPreco: "periodo",
    precos: { dia: 50.0, semana: 140.0, quinzena: 225.0, mes: 240.0 },
  },
  {
    slug: "escada-articulada-de-aluminio",
    nome: "Escada Articulada de Alumínio",
    categoria: "escadas-elevacao",
    tipoPreco: "periodo",
    precos: { dia: 40.0, semana: 126.0, quinzena: 180.0, mes: 240.0 },
  },
  {
    slug: "guincho-coluna",
    nome: "Guincho de Coluna 350Kg",
    categoria: "escadas-elevacao",
    tipoPreco: "periodo",
    precos: { dia: 190.0, semana: 675.0, quinzena: 375.0, mes: 450.0 },
  },

  // Energia
  {
    slug: "gerador-a-gasolina",
    nome: "Gerador a Gasolina 7,6kva e 7,5kva",
    categoria: "energia",
    tipoPreco: "periodo",
    precos: { dia: 150.0, semana: 560.0, quinzena: 750.0, mes: 1200.0 },
  },
  {
    slug: "extensao-10m",
    nome: "Extensão 10 metros",
    categoria: "energia",
    tipoPreco: "periodo",
    precos: { dia: 5.0, semana: 21.0, quinzena: 22.5, mes: 30.0 },
  },
  {
    slug: "extensao-20m",
    nome: "Extensão 20 metros",
    categoria: "energia",
    tipoPreco: "periodo",
    precos: { dia: 6.0, semana: 24.5, quinzena: 30.0, mes: 36.0 },
  },
  {
    slug: "extensao-30m",
    nome: "Extensão 30 metros",
    categoria: "energia",
    tipoPreco: "periodo",
    precos: { dia: 7.5, semana: 31.5, quinzena: 45.0, mes: 45.0 },
  },
  {
    slug: "extensao-50m",
    nome: "Extensão 50 metros",
    categoria: "energia",
    tipoPreco: "periodo",
    precos: { dia: 15.0, semana: 56.0, quinzena: 75.0, mes: 90.0 },
  },

  // Concreto e Argamassa
  {
    slug: "betoneira-400l",
    nome: "Betoneira Monofásica 400L",
    categoria: "concreto-argamassa",
    tipoPreco: "periodo",
    precos: { dia: 180.0, semana: 280.0, quinzena: 300.0, mes: 420.0 },
  },
  {
    slug: "peneira-eletrica",
    nome: "Peneira Elétrica",
    categoria: "concreto-argamassa",
    tipoPreco: "periodo",
    precos: { dia: 180.0, semana: 245.0, quinzena: 300.0, mes: 510.0 },
  },
  {
    slug: "vibrador-bosch",
    nome: "Vibrador Bosch Mangote de 3,5m",
    categoria: "concreto-argamassa",
    tipoPreco: "periodo",
    precos: { dia: 60.0, semana: 350.0, quinzena: 600.0, mes: 750.0 },
  },
  {
    slug: "vibrador-portatil",
    nome: "Vibrador Portátil 25mm Mangote de 1,50m",
    categoria: "concreto-argamassa",
    tipoPreco: "periodo",
    precos: { dia: 40.0, semana: 210.0, quinzena: 300.0, mes: 360.0 },
  },

  // Água e Limpeza
  {
    slug: "bomba-dagua-submersivel",
    nome: "Bomba D'água Submersível",
    categoria: "agua-limpeza",
    tipoPreco: "periodo",
    precos: { dia: 60.0, semana: 245.0, quinzena: 300.0, mes: 360.0 },
  },
  {
    slug: "motobomba-honda",
    nome: "Motobomba Honda",
    categoria: "agua-limpeza",
    tipoPreco: "periodo",
    precos: { dia: 120.0, semana: 300.0, quinzena: 470.0, mes: 550.0 },
  },
  {
    slug: "lavadora-alta-pressao",
    nome: "Lavadora Alta Pressão",
    categoria: "agua-limpeza",
    tipoPreco: "periodo",
    precos: { dia: 35.0, semana: 175.0, quinzena: 270.0, mes: 300.0 },
  },
  {
    slug: "cortador-de-grama-eletrico",
    nome: "Cortador de Grama Elétrico",
    categoria: "agua-limpeza",
    tipoPreco: "periodo",
    precos: { dia: 35.0, semana: 175.0, quinzena: 270.0, mes: 300.0 },
  },
];
