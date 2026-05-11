# CHANGELOG

## Objetivo

Este arquivo registra os marcos relevantes da evolucao do site Neuroflash. Ele deve permanecer curto, legivel e focado em mudancas que alteram estrutura, comportamento, documentacao ou direcao de manutencao.

## Como Registrar Novas Entradas

Use sempre o formato abaixo:

```md
## YYYY-MM-DD - Titulo da mudanca

- Mudanca: resumo objetivo do que foi alterado.
- Impacto: efeito da mudanca no projeto, na manutencao ou na experiencia.
```

Regras:

- agrupar microajustes do mesmo dia e do mesmo tema em uma unica entrada
- separar entradas apenas quando a natureza da mudanca for diferente
- usar o `SITE_ARCHITECTURE.md` para o estado atual e este arquivo para a trilha historica

## Historico Consolidado

## 2026-05-10 - Ajustes visuais da pagina Quem Somos

- Mudanca: a pagina Quem Somos recebeu ajustes visuais no marcador colorido do titulo em desktop, no alinhamento e espacamento do bloco contextual da FAQ e na ordem editorial, com o CTA de FAQ posicionado abaixo da imagem dos fundadores.
- Impacto: melhorou a hierarquia visual da pagina e deixou o fluxo de leitura narrativa, foto e CTA mais consistente entre desktop e mobile.

## 2026-05-10 - Ajustes finos de SEO on-page sem dependencia de dominio

- Mudanca: FAQ e Quem Somos deixaram de se apresentar como `article` no Open Graph, as paginas com imagem social ganharam metadados de tipo e dimensoes, a Home trocou o CTA hero sem destino por links internos reais e a pagina Quem Somos passou a incluir um link contextual para a FAQ.
- Impacto: melhorou a coerencia semantica dos compartilhamentos, fortaleceu a malha interna de navegacao e removeu placeholders de CTA sem antecipar `canonical`, `og:url`, `robots.txt` ou `sitemap.xml`.

## 2026-05-10 - Otimizacao do caminho critico e da hidratação da Home

- Mudanca: as paginas publicas passaram a pedir apenas os pesos de fonte realmente usados, os icones do rodape receberam dimensoes explicitas para reduzir pequenos saltos de layout e o carrossel desktop da Hero passou a registrar `hero-focus2.jpg` e `hero-focus3.jpg` apenas apos a primeira pintura util, com hidratação adiada e fallback compativel.
- Impacto: reduziu o custo inicial de rede e trabalho imediato de renderizacao sem mexer nos assets nem na arquitetura estatica, preservando a compatibilidade com `file:///` e o comportamento publico do site.

## 2026-05-10 - Consolidacao da camada visual compartilhada

- Mudanca: `shared/styles.css` passou a concentrar primitivas nomeadas de secao, painel, midia e tipografia compartilhada, enquanto Home, FAQ e Quem Somos foram alinhadas para consumir essas classes de forma mais explicita e a hero-card da Home passou a reutilizar a base de painel compartilhado sem alterar o comportamento publico.
- Impacto: reduziu densidade e repeticao residual entre CSS local e compartilhado, deixou a fronteira de ownership mais clara e manteve a arquitetura estatica do site com menor custo de manutencao.

## 2026-05-10 - Carrossel automatico na Hero

- Mudanca: a imagem principal da Hero desktop virou um carrossel com `hero-focus.jpg`, `hero-focus2.jpg` e `hero-focus3.jpg`, com troca automatica, setas laterais, indicadores inferiores e controle dedicado em `home/hero-carousel.js`, respeitando `prefers-reduced-motion`.
- Impacto: ampliou a variacao visual do destaque principal sem mexer no layout mobile da Home, mantendo a arquitetura estatica do site com uma excecao controlada de JavaScript proprio para a Hero.

## 2026-05-10 - Guia geral de imagens do site

- Mudanca: o guia tecnico de imagens da Home foi renomeado para `documentação/SITE_IMAGE_GUIDE.txt` e expandido para cobrir Home, Quem Somos, FAQ, background compartilhado e icones do rodape, com dimensoes reais, dimensoes declaradas e orientacoes de substituicao.
- Impacto: a documentacao de assets ficou alinhada ao site multi-page atual e evita manter informacoes de mockups limitadas apenas a Home.

## 2026-05-10 - Refinos visuais da Home e rodape

- Mudanca: o titulo principal da Home passou a separar a cor de `Neuro` e `Flash`, o bloco de destaques ganhou respiro superior mais equilibrado, a imagem principal do hero foi substituida preservando `home/hero-focus.jpg` e o rodape compartilhado foi reequilibrado com fonte maior, espacamento controlado, alinhamento de topo no grid, titulo `Essentia Health` todo branco, sem o subgrupo legal e com icones PNG compartilhados nos contatos.
- Impacto: melhorou a leitura visual da Home e a legibilidade do rodape sem voltar ao excesso de area vazia nem alterar a arquitetura estatica ou a navegacao compartilhada.

## 2026-05-10 - Reestruturacao da Home canonica e reforco de SEO

- Mudanca: a Home passou a ser servida pela raiz em `index.html`, `home/index.html` virou fallback tecnico com `noindex`, a navegacao compartilhada passou a apontar para a raiz e as paginas publicas ganharam Open Graph/Twitter mais completos, JSON-LD minimo por tipo de pagina e copy estrutural da Home mais alinhada a `pt-BR`.
- Impacto: fortaleceu a arquitetura de indexacao do site, melhorou a coerencia entre snippet, compartilhamento social e semantica on-page e preparou a base para `canonical`, `og:url`, `robots.txt` e `sitemap.xml` assim que o dominio publico for definido.

## 2026-05-10 - Ajustes de performance em carregamento e navegacao

- Mudanca: a Home passou a evitar o download da hero desktop no mobile, o CSS compartilhado ganhou um perfil de performance mobile com menos efeitos caros e blocos estaticos abaixo da dobra passaram a usar adiamento de renderizacao.
- Impacto: reduziu custo de rede desnecessario no mobile e aliviou pintura/composicao durante a navegacao, preservando o site estatico e a compatibilidade com `file:///`.

## 2026-05-10 - Refatoracao conservadora para limpeza e clareza

- Mudanca: a camada compartilhada ganhou primitivas de secao interna, o `shared/includes.js` foi reorganizado com helpers menores, a Home passou a usar utilitarios locais de midia e o acordeao da FAQ deixou de repetir consultas e indices durante a inicializacao.
- Impacto: reduziu duplicacao real de CSS e JavaScript, deixou a manutencao mais clara e preservou o comportamento publico estatico e compativel com `file:///`.

## 2026-05-10 - Normalizacao do nome institucional

- Mudanca: o nome institucional e os identificadores temporarios exibidos no site foram alinhados para `Essentia Health`, incluindo rodape compartilhado, e-mail, Instagram e referencia historica anterior no changelog.
- Impacto: removeu inconsistencias publicas de naming institucional, deixando a identidade temporaria coerente em todo o projeto.

## 2026-05-09 - Rodape institucional compartilhado

- Mudanca: o rodape simples foi substituido por um componente compartilhado com mini mapa do site, contatos temporarios, dados ficticios da Essentia Health e bloco legal.
- Impacto: melhorou a navegacao inferior e preparou espaco institucional para informacoes reais da empresa sem duplicar HTML nas paginas.

## 2026-05-09 - Pagina Quem Somos

- Mudanca: criada a pagina institucional `quem-somos/`, com narrativa dos fundadores, imagem dedicada, CSS local e link no menu compartilhado.
- Impacto: ampliou o site para tres paginas oficiais mantendo arquitetura estatica, includes compartilhados, visual consistente e compatibilidade com `file:///`.

## 2026-05-09 - Base SEO conservadora

- Mudanca: foram adicionados metadados por pagina, JSON-LD basico sem URLs finais, H1 semantico na FAQ, lista de ingredientes em HTML semantico e textos alternativos mais descritivos nas imagens da Home.
- Impacto: melhorou a leitura do site por buscadores e acessibilidade sem criar promessas comerciais ou dependencias de dominio ainda nao definido.

## 2026-05-09 - Lazy loading nativo de imagens

- Mudanca: as imagens abaixo da dobra da Home passaram a usar `loading="lazy"` e `decoding="async"`, as imagens criticas do topo foram priorizadas e o script proprio da FAQ passou a carregar com `defer`.
- Impacto: melhorou o carregamento percebido em desktop e mobile sem adicionar build step, framework ou JavaScript customizado para imagens.

## 2026-05-09 - Ajuste de transparencia mobile

- Mudanca: a opacidade da `page-shell`, do overlay compartilhado e dos paineis foi reduzida no mobile para revelar mais o background entre os objetos.
- Impacto: melhorou a presenca visual do fundo em telas pequenas sem alterar a camada desktop ja validada.

## 2026-05-09 - Ajuste de visibilidade do background desktop

- Mudanca: a opacidade da `page-shell` e do overlay compartilhado foi reduzida no desktop para revelar o background fixo aplicado ao `body`.
- Impacto: restaurou a presenca visual do fundo em telas largas sem alterar a camada mobile mais escura.

## 2026-05-09 - Fundo fixo com efeito parallax

- Mudanca: o background compartilhado passou a ser aplicado no `body` com `background-attachment: fixed`, enquanto a `page-shell` ficou translucida e rola com o conteudo.
- Impacto: criou o efeito parallax simples em Home e FAQ, mantendo o fundo parado e os elementos de frente em movimento.

## 2026-05-09 - Correcao do contorno superior mobile

- Mudanca: o `border-top` da `page-shell` foi promovido para a regra base de `shared/styles.css`, removendo a dependencia exclusiva do bloco desktop.
- Impacto: restaurou a linha de contorno superior no mobile sem alterar o visual desktop.

## 2026-05-09 - Correcao do menu fixo e CTA da Home

- Mudanca: o comportamento sticky do menu superior foi movido para o wrapper `data-shared-header`, e o CTA `COMPRAR AGORA` da Home foi deixado sem link enquanto a compra nao estiver liberada.
- Impacto: restaurou a navegacao sempre visivel durante a rolagem e evitou abertura indevida de e-mail no CTA principal da Home.

## 2026-05-09 - Centralizacao de arquivos compartilhados

- Mudanca: `shared.css` foi movido para `shared/styles.css` e `background-neuroflash.jpg` foi movido para `shared/background-neuroflash.jpg`, com Home e FAQ atualizadas para os novos caminhos.
- Impacto: deixou a pasta `shared/` como ponto unico para estilos, scripts e assets compartilhados, reduzindo arquivos soltos na raiz do projeto.

## 2026-05-09 - Centralizacao da documentacao

- Mudanca: a pasta `logs/` foi renomeada para `documentação/`, o guia tecnico de imagens da Home foi movido para a pasta documental e foi criado `COISAS_A_FAZER.txt` para registrar tarefas futuras em texto simples.
- Impacto: centralizou a documentacao permanente do projeto, deixou a Home focada em pagina e assets e criou uma fila leve de pendencias legivel por humanos e agentes de IA.

## 2026-05-09 - Refatoracao compartilhada sem build

- Mudanca: header e footer foram extraidos para `shared/includes.js`, CTAs sem destino foram substituidos por contato por e-mail, o acordeao da FAQ ganhou relacao ARIA mais clara, duplicatas do background foram removidas, o asset `game-competicao.jpg` passou a usar nome ASCII e a documentacao foi reescrita em texto UTF-8 limpo.
- Impacto: reduziu duplicacao entre Home e FAQ, preservou compatibilidade com GitHub Pages e `file:///`, diminuiu risco de links mortos e deixou a manutencao de componentes e assets mais previsivel.

## 2026-05-07 - Criacao da documentacao-base e limpeza estrutural inicial

- Mudanca: criados o `CHANGELOG.md` e o mapeamento inicial da arquitetura, removidos arquivos legados da raiz e simplificada a estrutura oficial do projeto em torno de `index.html`, `home/` e `faq/`.
- Impacto: estabeleceu uma base documental para evolucao futura e reduziu o risco de manutencao sobre codigo e arquivos que ja nao participavam das paginas oficiais.

## 2026-05-07 - Ajustes visuais da home, da FAQ e do guia tecnico de imagens

- Mudanca: refinados topo, packshot, galeria e enquadramentos da home, removida a animacao de abertura da FAQ e criado/ajustado o guia tecnico de imagens para orientar manutencao de imagens.
- Impacto: melhorou a consistencia visual entre mobile e desktop, estabilizou a leitura da embalagem do produto e deixou uma referencia tecnica pratica para futuras trocas de assets.

## 2026-05-08 - Consolidacao do topo e da navegacao entre Home e FAQ

- Mudanca: unificado o header das paginas, alinhados branding, menu, contornos e linhas estruturais, corrigindo diferencas entre mobile e desktop e removendo elementos duplicados na FAQ.
- Impacto: reduziu inconsistencias visuais entre as paginas oficiais e estabilizou o comportamento do topo em diferentes larguras de tela.

## 2026-05-08 - Refatoracao da base compartilhada de estilo e comportamento

- Mudanca: consolidada a base comum em `shared.css`, padronizados componentes visuais compartilhados, simplificado o JavaScript do acordeao da FAQ e centralizado o background oficial em `background-neuroflash.jpg` na raiz.
- Impacto: reduziu duplicacao entre Home e FAQ, deixou ownership mais claro entre estilos compartilhados e locais e diminuiu o custo de manutencao da interface.

## 2026-05-08 - Compatibilidade local e compartilhamento do aviso legal

- Mudanca: o aviso legal foi extraido para uma estrategia compartilhada via `shared/includes.js`, primeiro como include client-side e depois ajustado para injecao direta compativel com `file:///`.
- Impacto: eliminou duplicacao de markup entre Home e FAQ e garantiu funcionamento consistente tanto no GitHub Pages quanto na abertura local no Windows.

## 2026-05-08 - Enxugamento da documentacao arquitetural

- Mudanca: o `SITE_ARCHITECTURE.md` foi reescrito em formato operacional curto, com correcao de encoding, remocao de repeticoes e consolidacao das informacoes de estrutura, ownership, comportamento e manutencao.
- Impacto: tornou a documentacao mais estavel, rapida de atualizar e menos propensa a erros de edicao ou ruido de codificacao.

## 2026-05-08 - Enxugamento estrutural do CHANGELOG

- Mudanca: o proprio `CHANGELOG.md` foi consolidado em blocos tematicos curtos, com agrupamento por dia e assunto, remocao de redundancias e padronizacao em portugues UTF-8.
- Impacto: deixou o historico mais facil de consultar, reduziu ruido de microcorrecoes e estabeleceu um formato mais sustentavel para futuras entradas.
