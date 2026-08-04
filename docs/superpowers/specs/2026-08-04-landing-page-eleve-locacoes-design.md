# Landing page — Eleve Locações de Equipamentos

Data: 2026-08-04

## Objetivo

Página única que apresenta o catálogo de equipamentos da Eleve Locações e converte o
visitante em cliente pelo WhatsApp. Sem carrinho, sem backend, sem cadastro: o cliente
encontra o equipamento, vê o preço, e chama a empresa com a mensagem já escrita.

## A empresa

- **Nome:** Eleve Locações de Equipamentos
- **Ramo:** locação de equipamentos para construção civil
- **Endereço:** Rua Dr. Ronaldo Ponte Dias, 1279 — Bairro Antônio Carlos Belchior, Sobral-CE
- **Telefones:** (88) 3111-3241 · Tim (88) 99998-3050 · Claro (88) 9333-9830
- **E-mail:** elevelocacoes@gmail.com
- **Instagram:** [@elevelocacoes](https://www.instagram.com/elevelocacoes/)
- **Horário:** segunda a sexta, 7h30–12h e 13h30–17h
- **Atendimento:** Sobral (foco) e Preá
- **Entrega:** retirada na loja ou entrega; frete cobrado em alguns casos, negociado com o atendente
- **Logotipo:** `public/logo-eleve.jpg` (extraído do PDF da tabela de preços)

## Stack

Astro 7 + Tailwind 4, já instalados no repositório. Saída estática. Sem framework de UI —
o único comportamento dinâmico (filtro e busca do catálogo) é JS vanilla sobre
`data-attributes`, o que não justifica hidratar React ou Vue.

## Arquitetura

```
src/
  data/equipamentos.ts       # fonte única do catálogo: nome, slug, categoria, preços, foto
  components/
    Header.astro             # topo fixo: logo + CTA WhatsApp
    Hero.astro
    Catalogo.astro           # busca + chips de categoria + grid
    CardEquipamento.astro     # renderiza os dois formatos de preço
    ComoFunciona.astro
    Contato.astro
    Footer.astro
    BotaoWhatsApp.astro      # flutuante
  layouts/Layout.astro       # <head>, meta tags, SEO, fontes
  pages/index.astro          # compõe as seções
  styles/global.css          # tokens de cor e tipografia (Tailwind 4 @theme)
public/
  logo-eleve.jpg
  produtos/<slug>.jpg        # fotos, a serem enviadas pelo cliente
```

**Fronteira principal:** `equipamentos.ts` é a única fonte de conteúdo do catálogo.
Alterar preço, adicionar equipamento ou trocar categoria é editar esse arquivo — nenhum
componente precisa mudar. `CardEquipamento.astro` recebe um item e decide o layout de
preço pelo campo `tipoPreco`; não conhece a lista nem o filtro.

### Modelo de dados

```ts
type TipoPreco = 'periodo' | 'peca'

type Equipamento = {
  slug: string          // 'betoneira-monofasica-400l' — usado na foto e na âncora
  nome: string
  categoria: Categoria
  tipoPreco: TipoPreco
  precos: { dia: number; semana: number; quinzena: number; mes: number }
  descricao?: string    // linha curta de apoio, opcional
}
```

## As duas lógicas de preço

A tabela original mistura dois regimes, e essa distinção é a decisão de design central:

- **`periodo`** (30 itens, máquinas e ferramentas) — valor **total do período**.
  Betoneira: R$180 por um dia, R$280 pela semana inteira, R$420 pelo mês.
- **`peca`** (10 itens de andaime e escoramento) — valor **por peça, por dia**,
  decrescente conforme o prazo. Escora 3,2m: R$6,00 por peça/dia avulso, caindo a
  R$0,60 por peça/dia na locação mensal.

Exibir os dois no mesmo formato induziria o cliente a erro, então o card muda:

```
periodo                          peca
─────────────────────────        ─────────────────────────
R$ 180,00 /dia                   R$ 6,00 peça/dia
─────────────────────────        ─────────────────────────
Semana ..........  280,00        no plano mensal cai
Quinzena ........  300,00        para R$ 0,60 peça/dia
Mês .............  420,00        ▸ ver todos os prazos
```

Nos itens `peca`, os quatro valores ficam em um `<details>` recolhido, rotulados como
"por peça/dia" para não deixar dúvida.

## Catálogo — 40 equipamentos, 7 categorias

Valores reproduzidos exatamente como na tabela fornecida pelo cliente.

### Andaimes e Escoramento — `peca`, valores por peça/dia

| Equipamento | Dia | Semana | Quinzena | Mês |
|---|---|---|---|---|
| Barra de Ancoragem 0,70m | 4,00 | 0,60 | 0,35 | 0,30 |
| Diagonal 1,0m e 1,5m | 0,80 | 0,60 | 0,40 | 0,30 |
| Escada para Andaime 1,0m e 2,0m | 2,00 | 1,00 | 0,80 | 0,60 |
| Escora Metálica 3,2m | 6,00 | 1,40 | 1,00 | 0,60 |
| Escora Metálica 4,5m | 7,00 | 1,80 | 1,20 | 0,70 |
| Painel Metálico 1,0m e 1,5m | 6,00 | 1,40 | 1,00 | 0,60 |
| Piso Metálico 1,0m e 1,5m | 6,00 | 1,40 | 1,00 | 0,60 |
| Rodízio | 6,00 | 1,50 | 1,00 | 0,60 |
| Sapata Ajustável | 2,50 | 1,00 | 0,60 | 0,50 |
| Sapata Simples | 1,50 | 0,80 | 0,50 | 0,40 |

### Demolição e Compactação — `periodo`

| Equipamento | Dia | Semana | Quinzena | Mês |
|---|---|---|---|---|
| Compactador de Percussão | 200,00 | 910,00 | 1.650,00 | 3.000,00 |
| Cortadora de Blocos | 60,00 | 280,00 | 375,00 | 450,00 |
| Martelo Demolidor 10Kg e 8Kg | 125,00 | 490,00 | 675,00 | 750,00 |
| Martelo Demolidor 30Kg | 165,00 | 770,00 | 1.200,00 | 1.200,00 |
| Martelo Rompedor 04Kg | 60,00 | 280,00 | 450,00 | 600,00 |
| Placa Vibratória | 165,00 | 770,00 | 1.200,00 | 1.200,00 |

### Ferramentas Elétricas — `periodo`

| Equipamento | Dia | Semana | Quinzena | Mês |
|---|---|---|---|---|
| Furadeira Bosch | 30,00 | 140,00 | 150,00 | 210,00 |
| Furadeira de Impacto | 30,00 | 140,00 | 150,00 | 210,00 |
| Lixadeira/Esmerilhadeira Bosch 220v | 65,00 | 160,00 | 225,00 | 255,00 |
| Mini Lixadeira Bosch | 55,00 | 125,00 | 170,00 | 225,00 |
| Parafusadeira e Furadeira Bateria Bosch | 25,00 | 105,00 | 105,00 | 150,00 |
| Serra Circular e Serra Mármore | 40,00 | 175,00 | 300,00 | 360,00 |

### Escadas e Elevação — `periodo`

| Equipamento | Dia | Semana | Quinzena | Mês |
|---|---|---|---|---|
| Escada Alumínio Dobrável 4,20 a 7,20 | 50,00 | 140,00 | 225,00 | 240,00 |
| Escada Extensiva Fibra de Vidro 4,20 a 7,20 | 50,00 | 140,00 | 225,00 | 240,00 |
| Escada Cavalete Fibra 3,85m 14 Degraus | 50,00 | 140,00 | 225,00 | 240,00 |
| Escada Articulada de Alumínio | 40,00 | 126,00 | 180,00 | 240,00 |
| Guincho de Coluna 350Kg | 190,00 | 675,00 | 375,00 | 450,00 |

### Energia — `periodo`

| Equipamento | Dia | Semana | Quinzena | Mês |
|---|---|---|---|---|
| Gerador a Gasolina 7,6kva e 7,5kva | 150,00 | 560,00 | 750,00 | 1.200,00 |
| Extensão 10 metros | 5,00 | 21,00 | 22,50 | 30,00 |
| Extensão 20 metros | 6,00 | 24,50 | 30,00 | 36,00 |
| Extensão 30 metros | 7,50 | 31,50 | 45,00 | 45,00 |
| Extensão 50 metros | 15,00 | 56,00 | 75,00 | 90,00 |

### Concreto e Argamassa — `periodo`

| Equipamento | Dia | Semana | Quinzena | Mês |
|---|---|---|---|---|
| Betoneira Monofásica 400L | 180,00 | 280,00 | 300,00 | 420,00 |
| Peneira Elétrica | 180,00 | 245,00 | 300,00 | 510,00 |
| Vibrador Bosch Mangote de 3,5m | 60,00 | 350,00 | 600,00 | 750,00 |
| Vibrador Portátil 25mm Mangote de 1,50m | 40,00 | 210,00 | 300,00 | 360,00 |

### Água e Limpeza — `periodo`

| Equipamento | Dia | Semana | Quinzena | Mês |
|---|---|---|---|---|
| Bomba D'água Submersível | 60,00 | 245,00 | 300,00 | 360,00 |
| Motobomba Honda | 120,00 | 300,00 | 470,00 | 550,00 |
| Lavadora Alta Pressão | 35,00 | 175,00 | 270,00 | 300,00 |
| Cortador de Grama Elétrico | 35,00 | 175,00 | 270,00 | 300,00 |

## Seções da página

1. **Header fixo** — logotipo à esquerda, links âncora (Catálogo, Como funciona, Contato)
   e botão WhatsApp à direita. No mobile, colapsa para logo + botão.
2. **Hero** — título "Equipamentos para sua obra, prontos para retirada em Sobral",
   subtítulo com as categorias principais, dois CTAs (ver catálogo / falar no WhatsApp)
   e uma faixa de credibilidade (40+ equipamentos · entrega em Sobral e Preá · atendimento
   direto no WhatsApp).
3. **Catálogo** — campo de busca por nome + chips de categoria (incluindo "Todos", ativo
   por padrão), grid responsivo de cards (1 col mobile / 2 tablet / 3–4 desktop).
   Um contador mostra quantos itens estão visíveis, e um estado vazio aparece quando a
   busca não encontra nada, com botão para chamar no WhatsApp mesmo assim.
4. **Como funciona** — 3 passos: escolha o equipamento → chame no WhatsApp e confirme
   prazo e disponibilidade → retire na loja ou receba na obra (frete conforme o caso).
5. **Contato** — endereço, os três telefones clicáveis, e-mail, horário, cidades atendidas
   e mapa incorporado. Sem formulário: todo contato vai para o WhatsApp ou telefone.
6. **Botão flutuante do WhatsApp** — canto inferior direito, presente em toda a rolagem.
7. **Rodapé** — logo, dados da empresa, Instagram, aviso de que os preços podem sofrer
   reajuste e devem ser confirmados no atendimento.

## Conversão

Todo CTA de produto abre `https://wa.me/5588999983050` com `?text=` preenchido:

> Olá! Vi no site e quero alugar: **{nome do equipamento}**. Qual a disponibilidade?

Os CTAs gerais (hero, header, flutuante) usam uma mensagem neutra: "Olá! Gostaria de um
orçamento de locação de equipamentos."

O número usado é o Tim (88) 99998-3050, o mesmo divulgado no Instagram.

## Identidade visual

Paleta definida pelo cliente:

- `#f89c33` — laranja, cor de ação: botões, preço em destaque, chip ativo, ícones
- `#58595b` — grafite, texto principal e superfícies escuras
- `#ffffff` — base

Derivados necessários (tons de apoio para bordas, fundos suaves e estados hover) são
gerados a partir dessas três cores e declarados como tokens em `global.css` via `@theme`
do Tailwind 4.

Tipografia com títulos pesados e levemente condensados, corpo neutro e legível — registro
adequado a construção civil, evitando a aparência de template genérico. Cantos pouco
arredondados, faixas diagonais discretas como elemento gráfico recorrente.

## Acessibilidade e SEO

- Contraste: laranja `#f89c33` sobre branco não atinge AA para texto pequeno, então é usado
  como fundo de botão com texto grafite, ou em texto grande. Texto corrido usa grafite.
- Chips de filtro são `<button>` com `aria-pressed`; busca tem `<label>` associado.
- Imagens com `alt` descritivo; fotos com `loading="lazy"` fora da primeira dobra.
- `<title>`, meta description, Open Graph e JSON-LD `LocalBusiness` com endereço, telefone,
  horário e área atendida — relevante para busca local ("aluguel de andaime Sobral").

## Fotos

O cliente enviará as fotos depois. A implementação usa `public/produtos/<slug>.jpg` e, na
ausência do arquivo, exibe um placeholder no estilo da marca: fundo grafite claro, ícone
da categoria em laranja e **o nome do equipamento escrito por cima**, para que o card
continue legível e útil mesmo sem foto. Assim a página fica publicável hoje e as fotos
entram depois apenas soltando os arquivos na pasta, sem alteração de código.

## Fora de escopo

- Páginas individuais por produto
- Carrinho ou lista de orçamento com múltiplos itens
- Formulário com envio de e-mail (exigiria backend)
- Área administrativa para edição de preços
- Regras de caução e documentação exigida (cliente pediu para deixar de fora por ora)

## Verificação

- `bun run build` conclui sem erro
- Todos os 40 equipamentos aparecem com "Todos" selecionado; cada chip filtra o subconjunto
  correto e o contador acompanha
- A busca encontra por trecho do nome, sem diferenciar acento ou caixa
- Todo botão de produto abre o WhatsApp com o nome correto na mensagem
- Layout sem quebra ou rolagem horizontal em 360px, 768px e 1440px
- Preços renderizados no formato brasileiro (`R$ 1.200,00`) e conferidos contra este spec

## Decisões confirmadas pelo cliente

- **Horário** — não há expediente aos sábados. A página informa apenas segunda a sexta.
- **Preços** — vão ao ar exatamente como na tabela, inclusive nos pontos que parecem
  digitação (Guincho de Coluna com semana acima da quinzena; Betoneira com quinzena quase
  igual à semana; Compactador sem desconto mensal; Parafusadeira com semana e quinzena
  iguais; Martelo Demolidor 30Kg e Placa Vibratória com quinzena e mês iguais). Serão
  revisados depois pelo cliente, editando `src/data/equipamentos.ts`.
- **Fotos** — serão enviadas depois. Até lá, placeholder com o nome do equipamento.
