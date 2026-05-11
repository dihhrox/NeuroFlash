# Arquitetura do Site Neuroflash

## Visao Geral

O projeto Neuroflash e uma landing page estatica multi-page, sem backend, sem build e sem pipeline automatizado. O fluxo publico e:

1. `index.html` funciona como Home canonica e pagina principal indexavel
2. `home/index.html` redireciona para `../index.html` como fallback de legado
3. `quem-somos/index.html` apresenta a historia e motivacao dos fundadores
4. `faq/index.html` cobre duvidas, protocolos e alertas complementares

Regras centrais:

- hospedagem-alvo: GitHub Pages
- compatibilidade local: as paginas devem funcionar em `file:///`
- base visual compartilhada: `shared/styles.css`
- componentes compartilhados: `shared/includes.js`
- logicas interativas de pagina: `faq/script.js` e `home/hero-carousel.js`
- fundo canonico compartilhado: `shared/background-neuroflash.jpg`, aplicado no `body` com comportamento fixo
- estrategia SEO atual: metadados por pagina, Open Graph/Twitter completos, headings semanticos, alt text descritivo e JSON-LD conservador sem URLs finais
- trilha oficial de mudancas: `documentação/CHANGELOG.md`
- fila simples de tarefas futuras: `documentação/COISAS_A_FAZER.txt`

Stack real:

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts (`Barlow Condensed` e `Inter`, carregadas com pesos realmente usados e `display=swap`)

O projeto nao usa Node.js, framework frontend, backend, build step, CI/CD, banco de dados ou variaveis de ambiente.

## Estrutura Atual

- `index.html`: Home canonica, indexavel e servida a partir da raiz.
- `home/`: assets visuais da Home, `home/styles.css`, `home/hero-carousel.js` e fallback tecnico de redirecionamento para a raiz.
- `quem-somos/`: pagina institucional, historia dos fundadores e asset `fundadores.jpg`.
- `faq/`: pagina de FAQ, protocolos e acordeao interativo.
- `shared/`: estilos, scripts, includes client-side sem `fetch` e assets compartilhados.
- `documentação/`: documentacao permanente, historico, arquitetura, guia tecnico de imagens e lista de tarefas futuras.

Ownership por area:

- `shared/styles.css`: tokens, shell translucida, background fixo, header, superficies, CTA base, warning box, footer e primitivas compartilhadas nomeadas como `section-title`, `surface-section`, `surface-panel` e `media-block`.
- `shared/includes.js`: injeta header, footer e aviso legal em marcadores `data-shared-*`, com helpers para links e blocos institucionais e com Home apontando para `index.html` na raiz.
- `shared/background-neuroflash.jpg`: fundo visual canonico compartilhado por Home, Quem Somos e FAQ, fixo no viewport para efeito parallax.
- `shared/icons/`: icones PNG compartilhados usados nos links de suporte e contato do rodape.
- `index.html` + `home/styles.css` + `home/hero-carousel.js`: hero, carrossel desktop, grids especificos da Home, ajustes de layout da Home e CTA principal.
- `home/index.html`: redirecionamento de compatibilidade para a Home canonica na raiz.
- `quem-somos/index.html` + `quem-somos/styles.css`: narrativa institucional, imagem dos fundadores e layout editorial.
- `faq/index.html` + `faq/styles.css` + `faq/script.js`: acordeao, protocolos e suporte complementar.
- `documentação/CHANGELOG.md`: historico tecnico.
- `documentação/SITE_ARCHITECTURE.md`: fotografia arquitetural atual e guia de manutencao.
- `documentação/SITE_IMAGE_GUIDE.txt`: guia tecnico de imagens do site.
- `documentação/COISAS_A_FAZER.txt`: lista simples de tarefas futuras para humanos e agentes de IA.

## Componentes E Comportamento

### Includes Compartilhados

`shared/includes.js` centraliza:

- header compartilhado via `data-shared-header`
- footer compartilhado via `data-shared-footer`, com mapa do site, contatos e dados empresariais temporarios
- aviso legal via `data-shared-legal-warning`

O script calcula caminhos relativos para raiz, `home/`, `quem-somos/` e `faq/`, preserva `aria-current` na pagina ativa e evita `fetch`, mantendo compatibilidade com GitHub Pages e abertura local no Windows.

### CSS Compartilhado

`shared/styles.css` deve receber apenas regras literalmente compartilhadas entre Home, Quem Somos e FAQ:

- tokens de cor
- shell da pagina
- navegacao e marca
- superficies reutilizaveis (`surface-panel`)
- botoes e links de acao (`cta-button` e `ghost-link`)
- titulos de secao (`section-title`)
- casca compartilhada de secoes internas (`surface-section`)
- blocos de midia reutilizaveis com crop opcional (`media-block`)
- aviso legal
- footer institucional compartilhado

Regras especificas de layout permanecem em `home/styles.css`, `faq/styles.css` ou `quem-somos/styles.css`.
Em especial, `home/styles.css` deve ficar restrito ao hero, carrossel, grids e ajustes que so existem na Home.

### Home

A Home segue majoritariamente estatica, mas agora possui um JavaScript proprio e pequeno para hidratar o carrossel desktop da hero.
O CSS local da Home concentra hero, carrossel, grids e ajustes de layout exclusivos da Home, enquanto `shared/styles.css` fornece as primitivas visuais base e `home/hero-carousel.js` controla troca automatica, setas laterais, indicadores inferiores e pausa por hover/focus apenas na imagem principal da hero.

Assets da Home:

- `clarity-rush.jpg`
- `estudo.jpg`
- `focus-lock.jpg`
- `game-competicao.jpg`
- `hero-focus.jpg`
- `hero-focus2.jpg`
- `hero-focus3.jpg`
- `homem-terno.jpg`
- `mental-ignition.jpg`
- `motocross.jpg`
- `mulher-ufc.jpg`
- `pressure-mode.jpg`
- `product-packshot2.jpg`
- `treino.jpg`

`documentação/SITE_IMAGE_GUIDE.txt` orienta enquadramento, dimensoes reais, dimensoes recomendadas, proporcoes e convencao de nomes para assets da Home, Quem Somos, FAQ, background compartilhado e icones do rodape. Novos assets devem usar nomes ASCII, sem acentos, cedilha ou espacos.

Politica de performance de imagens:

- a hero desktop usa `hero-focus.jpg`, `hero-focus2.jpg` e `hero-focus3.jpg` em carrossel com fade; a primeira imagem permanece prioritaria e os slides adicionais entram via JavaScript somente depois da primeira pintura util, com hidratação adiada e carregamento sob demanda.
- `hero-focus.jpg` e `product-packshot2.jpg` carregam de forma imediata por participarem do primeiro impacto visual.
- imagens abaixo da dobra usam lazy loading nativo com `decoding="async"` e dimensoes declaradas no HTML.
- a imagem principal da hero e seu carrossel devem permanecer desktop-only em tempo de rede, evitando download desnecessario no mobile.
- o background compartilhado permanece em CSS no `body`, sem lazy loading, porque faz parte da identidade visual global.

### Quem Somos

A pagina `quem-somos/` nao possui JavaScript proprio. Ela reutiliza header, footer, shell, fundo fixo e superficies compartilhadas, com CSS local para a narrativa institucional, a imagem `fundadores.jpg`, a proporcao do titulo de pagina no desktop e o posicionamento do CTA contextual da FAQ abaixo da foto dos fundadores.

### FAQ

O acordeao em `faq/script.js`:

- normaliza cada item uma vez antes de ligar os eventos
- controla abertura e fechamento de cada item
- fecha os demais itens ao abrir um novo
- sincroniza `aria-expanded`
- associa botoes e respostas com `aria-controls`
- recalcula altura em `load` e agrupa o `resize` em `requestAnimationFrame`

### Navegacao E Renderizacao

- o mobile usa um perfil de performance mais leve, sem `background-attachment: fixed` e sem `backdrop-filter` nos blocos compartilhados mais caros.
- blocos estaticos abaixo da dobra podem usar `content-visibility: auto` via utilitario compartilhado, sem aplicar essa tecnica ao acordeao da FAQ.
- a imagem institucional de `quem-somos/` e o rodape compartilhado podem participar desse adiamento de renderizacao por serem blocos estaticos abaixo da dobra.

### SEO

A estrategia SEO deve continuar conservadora enquanto nao houver URL publica final:

- `index.html` e a Home canonica; `home/index.html` funciona apenas como fallback tecnico com `noindex, follow`.
- Home, Quem Somos, FAQ e fallback de `home/` devem ter `title`, `description` e `robots` unicos.
- A Home usa JSON-LD basico para `Organization`, `Brand`, `WebSite`, `WebPage` e `Product`, sem preco, `Offer`, disponibilidade ou URL absoluta enquanto a venda nao estiver liberada.
- FAQ usa JSON-LD minimo de `WebPage` sobre o produto, e Quem Somos usa `AboutPage`, ambos sem URLs absolutas.
- Home, Quem Somos e FAQ devem manter Open Graph e Twitter cards com imagem e texto alternativo coerentes.
- Sempre que a imagem social for conhecida, manter tambem `og:image:type`, `og:image:width` e `og:image:height`.
- `canonical`, `sitemap.xml`, `robots.txt` com sitemap, `og:url` e URLs absolutas em schema ficam pendentes ate existir dominio publico.
- `FAQPage` schema deve ser avaliado com cautela, porque rich results de FAQ sao restritos e nao devem ser tratados como ganho garantido.
- Imagens editoriais devem manter `alt` descritivo, natural e sem excesso de palavras-chave.
- CTAs editoriais principais devem apontar para paginas reais do site ou destinos reais de contato, evitando botoes sem destino util.

## Manutencao

Regras de atualizacao:

- registrar mudancas relevantes em `documentação/CHANGELOG.md`
- registrar pendencias futuras em `documentação/COISAS_A_FAZER.txt`
- atualizar este arquivo quando mudar estrutura, ownership, fluxo de entrada, assets canonicos ou estrategia compartilhada
- tratar Home, Quem Somos e FAQ como um unico sistema visual
- preferir `shared/styles.css` para regras realmente identicas entre paginas
- manter includes sem `fetch` enquanto `file:///` for requisito
- substituir os dados ficticios do footer antes da publicacao publica

Checklist rapido pos-alteracao:

- validar `index.html -> quem-somos/ -> faq/`
- validar `home/index.html -> index.html`
- validar navegacao entre Home, Quem Somos e FAQ
- validar retorno da FAQ para a Home
- revisar visual em mobile e desktop
- conferir hero, galeria e CTAs da Home
- revisar autoplay, setas e indicadores da hero no desktop
- revisar funcionamento do acordeao da FAQ
- confirmar que nao ha referencias quebradas de assets
- confirmar que CTAs nao usam `href="#"`
- atualizar `documentação/CHANGELOG.md` se a mudanca for estrutural, visual relevante ou comportamental

## Notas De Evolucao

A evolucao recomendada continua leve. Introduzir Node.js, build, framework, CI/CD ou backend apenas quando houver necessidade real de conteudo dinamico, automacao de publicacao, testes automatizados robustos ou multiplos fluxos de distribuicao.
