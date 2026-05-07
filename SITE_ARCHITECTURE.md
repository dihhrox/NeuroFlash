# Arquitetura do Site Neuroflash

## Resumo

Este projeto e um site estatico com duas paginas oficiais e documentacao permanente na raiz:

- `index.html` na raiz: ponto de entrada que redireciona imediatamente para `./home/`
- `home/index.html`: landing principal
- `faq/index.html`: pagina secundaria com perguntas frequentes
- `CHANGELOG.md`: historico permanente das alteracoes
- `SITE_ARCHITECTURE.md`: referencia permanente da estrutura atual
- `HOME_IMAGE_GUIDE.txt`: guia tecnico em texto puro para imagens da home

Nao ha build, framework, bundler ou servidor de aplicacao no codigo encontrado. A estrutura atual e baseada em HTML, CSS e JavaScript puros, com assets locais por pasta.

## Fluxo de entrada e navegacao

1. O acesso pela raiz entra em `index.html`
2. A raiz usa `meta refresh` para redirecionar para `home/`
3. A landing em `home/index.html` funciona como pagina principal
4. A navegacao da landing aponta para ancoras internas e para `../faq/index.html`
5. A FAQ possui link de retorno para `../home/index.html`

## Paginas oficiais

### Home

Arquivo principal: `home/index.html`

Objetivo:
- apresentar a marca
- conduzir para compra
- mostrar destaques visuais
- levar o usuario para a FAQ

Estrutura semantica observada:
- `main.page-shell.home-shell`
- `header.home-nav`
- `section.hero-banner`
- `section.home-section#destaques`
- `section.home-section#modos`
- `section.home-section#galeria`
- `section.home-section` final com aviso e CTA
- `footer.footer`

Blocos visuais principais:
- marca e navegacao
- hero com titulo, CTA e area visual
- grade de destaques
- grade de modos de uso
- grade de galeria com linha superior A/B/C e bloco expandido inferior
- aviso final

Dependencias diretas:
- `home/styles.css`
- Google Fonts: `Barlow Condensed` e `Inter`
- imagens locais dentro da pasta `home/`

Interatividade:
- nao ha JavaScript dedicado na home atual
- toda a experiencia da home e conduzida por HTML + CSS

Responsividade:
- layout mobile-first
- quebra principal em `@media (max-width: 768px)`
- expansao desktop em `@media (min-width: 900px)`

### FAQ

Arquivo principal: `faq/index.html`

Objetivo:
- detalhar protocolos de uso
- responder duvidas comuns
- reforcar avisos de uso

Estrutura semantica observada:
- `main.page-shell`
- `section.hero`
- `section.faq-section`
- `div.faq-list` com itens expansivos
- `aside.warning-box`
- `footer.footer`

Dependencias diretas:
- `faq/styles.css`
- `faq/script.js`
- Google Fonts: `Barlow Condensed` e `Inter`
- `faq/background-neuroflash.jpg`

Interatividade:
- acordeao de FAQ controlado por `faq/script.js`
- apenas um item pode ficar aberto por vez
- atualizacao de `aria-expanded`
- recalculo de altura no `load` e no `resize`
- abertura visual configurada sem animacao, com resposta instantanea em desktop e mobile

Responsividade:
- comportamento principal definido por `faq/styles.css`
- regras mobile e desktop seguem a mesma estrategia geral da home

## CSS por area

### `home/styles.css`

Responsavel por:
- tokens visuais em `:root`
- layout geral da home
- hero visual com imagens
- grids de destaques, modos e galeria
- responsividade mobile e desktop

Observacao importante:
- este arquivo contem ajustes especificos de enquadramento, escala e posicionamento de imagens
- a home usa assets `.jpg` locais, inclusive `background-neuroflash.jpg`
- a galeria superior usa tres blocos visuais equivalentes no desktop com nomenclatura `gallery-small-a`, `gallery-small-b` e `gallery-small-c`
- o packshot do produto usa enquadramento fixo por CSS, sem variaveis de zoom
- os tres cards superiores da galeria preservam proporcao horizontal equivalente no desktop

### `faq/styles.css`

Responsavel por:
- identidade visual da FAQ
- shell da pagina
- tipografia
- cards do acordeao
- estado visual de abertura e fechamento
- responsividade da pagina

## JavaScript ativo

### `faq/script.js`

Responsabilidades:
- localizar todos os elementos `.faq-item`
- abrir e fechar respostas clicadas
- garantir fechamento dos outros itens
- sincronizar `max-height` para animacao visual
- atualizar `aria-expanded`

## Assets por pasta

### Raiz

Arquivos oficiais:
- `index.html`
- `CHANGELOG.md`
- `SITE_ARCHITECTURE.md`
- `HOME_IMAGE_GUIDE.txt`

Uso real:
- `index.html` participa da navegacao
- `CHANGELOG.md`, `SITE_ARCHITECTURE.md` e `HOME_IMAGE_GUIDE.txt` fazem parte da manutencao oficial do projeto

### Home

Assets visuais locais:
- `background-neuroflash.jpg`
- `clarity-rush.jpg`
- `estudo.jpg`
- `focus-lock.jpg`
- `game-competição.jpg`
- `hero-focus.jpg`
- `homem-terno.jpg`
- `mental-ignition.jpg`
- `motocross.jpg`
- `mulher-ufc.jpg`
- `pressure-mode.jpg`
- `product-packshot.png`
- `product-packshot2.jpg`
- `treino.jpg`

### FAQ

Assets locais:
- `background-neuroflash.jpg`

## Duplicacoes e pontos de atencao

Limpeza ja aplicada:
- `script.js` da raiz foi removido por ser duplicado exato de `faq/script.js`
- `styles.css` da raiz foi removido por nao ser carregado pelas paginas oficiais
- `background-neuroflash.jpg` da raiz foi removido por nao possuir uso nas paginas oficiais

Conclusao operacional:
- a home oficial usa `home/index.html` + `home/styles.css`
- a FAQ oficial usa `faq/index.html` + `faq/styles.css` + `faq/script.js`
- a raiz agora contem apenas o ponto de entrada e os arquivos permanentes de documentacao

## Convencao para futuras alteracoes

- Toda alteracao em HTML, CSS, JS ou assets relevantes deve ser registrada em `CHANGELOG.md`
- Cada entrada deve informar data, titulo, arquivos alterados, resumo e impacto/contexto
- Antes de refatorar arquivos da raiz, revisar se ainda existe dependencia externa nao documentada
- Atualizacoes de campos visuais da home devem consultar `HOME_IMAGE_GUIDE.txt` para manter proporcoes e tamanhos recomendados
