# Arquitetura do Site Neuroflash

## Resumo

Este documento consolida a arquitetura operacional do projeto Neuroflash no estado atual e registra um modelo-alvo leve para futura evolucao. O projeto continua sendo uma landing estatica multi-page, sem backend, sem pipeline automatizado e sem camada de build.

Pontos centrais:

- `index.html` e o ponto de entrada publico e redireciona para `./home/`
- `shared.css` concentra a base visual compartilhada entre as paginas oficiais
- `home/` contem a landing principal e seus assets visuais
- `faq/` contem a pagina secundaria, seu estilo proprio e o unico JavaScript ativo
- `logs/` concentra a documentacao permanente do projeto
- nao foram encontrados `package.json`, `.env`, workflows de CI/CD, Docker, banco de dados ou servicos de aplicacao

## Visao Geral Da Arquitetura

### Objetivo do projeto

O projeto apresenta o produto Neuroflash em uma experiencia editorial de alta conversao, com duas superficies principais:

- `home/index.html` para branding, destaques visuais, modos de uso e CTA principal
- `faq/index.html` para protocolos, duvidas frequentes, avisos e orientacao complementar

### Fluxo de entrada e navegacao

1. O acesso inicial ocorre por `index.html`
2. A raiz usa `meta refresh` para redirecionar o usuario para `home/`
3. `home/index.html` funciona como pagina principal
4. A home aponta para ancoras internas e para `../faq/index.html`
5. `faq/index.html` retorna para `../home/index.html` pelo header

### Relacao entre os blocos do projeto

- `index.html` faz apenas o roteamento de entrada
- `shared.css` centraliza tokens e componentes visuais reutilizados
- `home/` contem a interface principal e quase todo o conteudo visual
- `faq/` contem a interface secundaria e o comportamento interativo do acordeao
- `logs/CHANGELOG.md` registra alteracoes tecnicas relevantes
- `logs/SITE_ARCHITECTURE.md` funciona como referencia arquitetural oficial
- `home/HOME_IMAGE_GUIDE.txt` funciona como anexo operacional para manutencao visual da home

### Dependencias externas reais

Dependencias identificadas no codigo atual:

- Google Fonts
- fontes `Barlow Condensed`
- fonte `Inter`

Nao ha dependencia observada de:

- framework frontend
- runtime Node.js
- bundler
- API externa
- backend
- banco de dados
- servico de autenticacao
- integracao de analytics documentada em codigo

## Stack Tecnologico Completo

### Estado atual

- HTML5 para estrutura de paginas
- CSS3 para layout, responsividade, identidade visual e enquadramento de assets
- `shared.css` como camada base compartilhada
- JavaScript vanilla em `faq/script.js` para o comportamento do acordeao
- assets locais `.jpg` para fundos e imagens editoriais
- o packshot ativo observado no HTML atual e `product-packshot2.jpg`
- Google Fonts para tipografia remota

### Ausencias explicitas

Nao foram encontrados no projeto atual:

- Node.js como dependencia declarada
- React, Vue, Angular ou outro framework
- build step
- bundler
- package manager do projeto
- CI/CD
- pipeline de deploy
- backend
- banco de dados
- cache server
- containerizacao

## Variaveis De Ambiente

### Estado atual

Nenhuma variavel de ambiente foi encontrada no projeto inspecionado.

Nao foram encontrados:

- arquivos `.env`
- leitura de `process.env`
- leitura de `import.meta.env`
- configuracao por ambiente
- segredo local
- chave de API documentada
- automacao de deploy dependente de variaveis

### Implicacao operacional

Toda a configuracao atual e embutida diretamente nos arquivos HTML, CSS, JS e paths relativos de assets.

## Estrutura Do Diretorio De Conteudo

### Estrutura atual

- `index.html`
- `shared.css`
- `home/`
- `faq/`
- `logs/`

### Conteudo navegavel

- `index.html`: entrada publica com redirecionamento para `home/`
- `home/index.html`: landing principal
- `faq/index.html`: pagina secundaria de suporte e educacao

### Conteudo editorial e textual

- FAQ textual embutida em `faq/index.html`
- mensagens editoriais, headings e CTAs embutidos em `home/index.html`

### Conteudo visual

- assets da home agrupados em `home/`
- asset visual da FAQ agrupado em `faq/background-neuroflash.jpg`

### Conteudo documental

- `logs/CHANGELOG.md`
- `logs/SITE_ARCHITECTURE.md`

### Guia tecnico complementar

- `home/HOME_IMAGE_GUIDE.txt`

## Apps E Responsabilidades

### App `home`

Arquivos principais:

- `shared.css`
- `home/index.html`
- `home/styles.css`

Responsabilidades:

- apresentar a marca
- exibir hero, destaques, modos de uso, galeria e CTA final
- direcionar o usuario para a FAQ
- concentrar a maior parte do sistema visual do projeto

Estrutura semantica observada:

- `main.page-shell.home-shell`
- `header.home-nav`
- `section.hero-banner`
- `section.home-section#destaques`
- `section.home-section#modos`
- `section.home-section#galeria`
- `section.home-section` final com aviso e CTA
- `footer.footer`

Interatividade:

- nao ha JavaScript dedicado na home atual
- a experiencia da home e conduzida por HTML e CSS
- cards visuais reutilizam a classe compartilhada `surface-panel` em vez de reaproveitar classes da FAQ
- o primeiro bloco visivel nao usa mais `section-line` abaixo do header

### App `faq`

Arquivos principais:

- `shared.css`
- `faq/index.html`
- `faq/styles.css`
- `faq/script.js`

Responsabilidades:

- responder duvidas comuns
- detalhar protocolos de uso
- reforcar alertas e limites de consumo
- manter comportamento de acordeao com foco em leitura sequencial

Estrutura semantica observada:

- `main.page-shell`
- `header.home-nav`
- `section.faq-section`
- `div.faq-list`
- `article.faq-item`
- `aside.warning-box`
- `footer.footer`

Interatividade:

- acordeao controlado por `faq/script.js`
- apenas um item pode ficar aberto por vez
- atualizacao de `aria-expanded`
- recalculo de `max-height` no `load` e no `resize`
- protecao contra itens sem `.faq-question` ou `.faq-answer`
- o topo permanece visivel durante a rolagem por meio do header sticky compartilhado

### App `logs`

Arquivos principais:

- `logs/CHANGELOG.md`
- `logs/SITE_ARCHITECTURE.md`

Responsabilidades:

- preservar historico tecnico
- registrar impacto de mudancas
- servir como base de contexto para manutencao futura

## Servicos, Jobs E Models Por App

### Estado atual

#### `home`

- services: nenhum
- jobs: nenhum
- models: nenhum

#### `faq`

- services: nenhum
- jobs: nenhum
- models: nenhum

#### `logs`

- services: nenhum
- jobs: nenhum
- models: nenhum

### Modelo-alvo para futura evolucao

Este projeto nao precisa dessas camadas hoje, mas pode adotar um modelo documental simples caso cresca.

#### Models sugeridos

- `navigation model`: define rotas, labels de menu e pagina ativa
- `faq item model`: define pergunta, resposta, ordem e estado esperado de renderizacao
- `content section model`: define blocos da home, heading, copy, CTA e dependencias de imagem
- `asset model`: define nome canonico, localizacao, proporcao e uso de cada imagem

#### Services sugeridos

- `content service`: centraliza leitura ou organizacao futura de textos e secoes
- `navigation service`: valida links internos e consistencia de menu
- `asset validation service`: verifica existencia e naming de imagens usadas pela home e FAQ
- `documentation service`: garante sincronismo minimo entre mudanca estrutural e documentacao

#### Jobs sugeridos

- `asset review job`: revisao manual periodica de enquadramento e proporcao de imagens
- `release checklist job`: execucao de checklist antes de publicar alteracoes
- `documentation sync job`: revisao de `CHANGELOG.md` e `SITE_ARCHITECTURE.md` apos mudancas estruturais
- `cross-page validation job`: validacao de header, links e consistencia visual entre home e FAQ

## Estrutura Tecnica Por Area

### `home/styles.css`

Responsavel por:

- layout especifico da home
- hero visual com imagens
- grids de destaques, modos e galeria
- responsividade mobile e desktop

Observacoes relevantes:

- contem regras especificas de enquadramento e posicionamento de imagem
- usa assets locais por path relativo
- a galeria superior usa `gallery-small-a`, `gallery-small-b` e `gallery-small-c`
- o packshot atual usa enquadramento fixo por CSS

### `shared.css`

Responsavel por:

- tokens visuais compartilhados
- `page-shell`
- header compartilhado sticky
- menu e branding
- `surface-panel`
- `warning-box`
- CTA base
- footer
- heading de secao e linha estrutural

Observacoes relevantes:

- o topo compartilhado usa `position: sticky` com fundo reforcado para permanecer legivel sobre o conteudo
- a linha inferior do header e a primeira linha estrutural abaixo do topo foram removidas em home e FAQ

### `faq/styles.css`

Responsavel por:

- camada especifica da FAQ
- cards do acordeao
- estados visuais de abertura e fechamento
- responsividade da pagina

Observacoes relevantes:

- seletores legados de hero, galeria e grids antigos foram removidos na refatoracao conservadora

### `faq/script.js`

Responsavel por:

- localizar `.faq-item`
- abrir e fechar respostas
- garantir fechamento dos demais itens
- sincronizar `max-height`
- atualizar `aria-expanded`

## Assets E Conteudo Por Pasta

### Raiz

Arquivos oficiais:

- `index.html`
- `shared.css`

Observacao:

- a raiz nao concentra mais os arquivos permanentes de documentacao; eles ficam em `logs/`
- a raiz tambem hospeda a folha compartilhada carregada por `home/` e `faq/`

### `home/`

Arquivos tecnicos:

- `home/index.html`
- `home/styles.css`
- `home/HOME_IMAGE_GUIDE.txt`

Assets visuais encontrados:

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
- `product-packshot2.jpg`
- `treino.jpg`

### `faq/`

Arquivos tecnicos:

- `faq/index.html`
- `faq/styles.css`
- `faq/script.js`

Assets visuais encontrados:

- `background-neuroflash.jpg`

### `logs/`

Arquivos documentais:

- `logs/CHANGELOG.md`
- `logs/SITE_ARCHITECTURE.md`

## Common Hurdles E Solucoes Documentadas

1. Links quebrados entre `home` e `faq`
   Solucao: validar sempre os paths relativos `../faq/index.html` e `../home/index.html` apos qualquer reorganizacao de pasta.
2. Divergencia entre documentacao e estrutura real
   Solucao: atualizar `logs/SITE_ARCHITECTURE.md` sempre que mudar ownership de arquivo, local de documentacao ou estrutura principal.
3. Imagens com enquadramento inconsistente
   Solucao: revisar `home/styles.css` junto com `home/HOME_IMAGE_GUIDE.txt` antes de trocar assets ou alterar proporcoes.
4. Regressao entre mobile e desktop
   Solucao: conferir manualmente os breakpoints principais apos mudancas em hero, header, galeria e FAQ.
5. Cards da galeria fora de proporcao
   Solucao: preservar a nomenclatura dos cards A/B/C e revisar as regras de proporcao horizontal no CSS antes de editar alturas.
6. Inconsistencia de header entre paginas
   Solucao: tratar `header.home-nav` como padrao compartilhado e validar home e FAQ em conjunto.
7. Assets orfaos ou duplicados
   Solucao: remover arquivos que nao estejam ligados as paginas oficiais e registrar a limpeza no changelog.
8. FAQ com abertura inesperada
   Solucao: revisar `faq/script.js`, especialmente `is-open`, `aria-expanded` e o recalculo de `max-height`.
9. Alteracoes sem registro no changelog
   Solucao: adicionar uma entrada em `logs/CHANGELOG.md` para cada mudanca estrutural, visual ou comportamental relevante.
10. Mudanca de nomenclatura CSS sem atualizar seletores
   Solucao: ao renomear classes, buscar referencias em HTML, CSS e documentacao tecnica no mesmo ciclo de mudanca.
11. Dependencia implicita de fontes externas
   Solucao: lembrar que a tipografia depende de Google Fonts e validar fallback visual se houver falha de carregamento.
12. Edicao visual sem validacao cruzada em home e FAQ
   Solucao: sempre revisar consistencia de branding, espacamento e navegacao nas duas paginas antes de concluir a entrega.

## Design Patterns Do Projeto

### Observados no estado atual

1. Multi-page static site
2. Entry-point redirect pattern via `meta refresh`
3. Shared visual language across pages
4. Asset colocation by page folder
5. Semantic section-based page composition
6. Mobile-first responsive styling
7. Progressive enhancement minimo
8. Single-responsibility JavaScript for FAQ behavior

### Recomendados para evolucao do projeto

9. Documentation-first structural changes
10. Change logging as operational policy
11. Canonical file ownership by app folder
12. Content grouping by concern
13. Naming consistency for CSS and assets
14. Cross-page UI parity validation

## Operacao E Manutencao

### Regras operacionais atuais

- toda mudanca relevante deve ser registrada em `logs/CHANGELOG.md`
- mudancas estruturais devem revisar este documento
- alteracoes visuais da home devem consultar `home/HOME_IMAGE_GUIDE.txt`
- a home e a FAQ devem ser tratadas como um sistema visual compartilhado
- regras duplicadas entre paginas devem preferencialmente ser mantidas em `shared.css`
- alteracoes no topo compartilhado devem validar estado sticky, contraste e espacamento inicial de home e FAQ

### Limites do projeto atual

- nao existe pipeline automatizado
- nao existe deploy descrito no codigo
- nao existe ambiente de staging documentado
- nao existe camada de configuracao por ambiente

## Checklist Pos-Implementacao

- validar a navegacao `index.html` -> `home/` -> `faq/`
- validar links de retorno da FAQ para a home
- validar visual em mobile
- validar visual em desktop
- conferir hero, packshot e galeria principal
- revisar funcionamento do acordeao da FAQ
- revisar `aria-expanded` e leitura basica de acessibilidade no FAQ
- confirmar que nao foram introduzidos assets orfaos
- atualizar `logs/CHANGELOG.md`
- revisar `logs/SITE_ARCHITECTURE.md` quando houver mudanca estrutural
