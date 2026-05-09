# Arquitetura do Site Neuroflash

## Visão geral

O projeto Neuroflash é uma landing page estática multi-page, sem backend, sem build e sem pipeline automatizado. O fluxo público é simples:

1. `index.html` redireciona para `./home/`
2. `home/index.html` funciona como página principal
3. `faq/index.html` cobre dúvidas, protocolos e alertas complementares

Regras centrais do estado atual:

- hospedagem-alvo: GitHub Pages
- compatibilidade local: as páginas também devem funcionar em `file:///`
- base visual compartilhada: `shared.css`
- componente compartilhado atual: `shared/includes.js`
- única lógica interativa de página: `faq/script.js`
- fundo canônico compartilhado: `background-neuroflash.jpg` na raiz
- trilha oficial de mudanças: `logs/CHANGELOG.md`

Stack real do projeto:

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts (`Barlow Condensed` e `Inter`)

O projeto não usa hoje:

- backend
- framework frontend
- Node.js
- build step
- CI/CD
- banco de dados
- variáveis de ambiente

## Estrutura atual

### Entrada pública

- `index.html`: redireciona para `home/`

### Pastas principais

- `home/`: landing principal, conteúdo editorial e assets visuais da home
- `faq/`: página de FAQ e seu comportamento interativo
- `shared/`: scripts leves compartilhados entre páginas
- `logs/`: documentação permanente do projeto

### Ownership por área

- `shared.css`: tokens, shell, header, superfícies, CTA base, warning box, footer e fundo compartilhado
- `shared/includes.js`: injeta componentes HTML compartilhados diretamente no DOM
- `home/index.html` + `home/styles.css`: hero, destaques, modos, galeria e CTA principal
- `faq/index.html` + `faq/styles.css` + `faq/script.js`: acordeão, protocolos e suporte complementar
- `logs/CHANGELOG.md`: histórico técnico
- `logs/SITE_ARCHITECTURE.md`: fotografia arquitetural atual e guia de manutenção

### Assets

Compartilhados:

- `background-neuroflash.jpg` na raiz

Específicos da home:

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

Complemento técnico:

- `home/HOME_IMAGE_GUIDE.txt`: referência operacional para enquadramento e troca de imagens da home

## Componentes e comportamento

### shared.css

Responsável por:

- identidade visual compartilhada
- `page-shell`
- header compartilhado sticky
- `surface-panel`
- `warning-box`
- `.cta-button`
- footer
- linha estrutural de seção
- fundo compartilhado via `background-neuroflash.jpg`

Observações:

- Home e FAQ devem reutilizar essa base sempre que a regra for literalmente igual
- mudanças no topo compartilhado devem ser validadas nas duas páginas

### shared/includes.js

Responsável por:

- centralizar componentes HTML compartilhados
- injetar o aviso legal em pontos marcados com `data-shared-legal-warning`

Observações:

- a estratégia atual evita `fetch`
- isso preserva compatibilidade com GitHub Pages e com abertura local em `file:///`

### Home

Arquivos:

- `home/index.html`
- `home/styles.css`

Responsabilidades:

- apresentar a marca
- exibir hero, destaques, modos de uso, galeria e CTA principal
- encaminhar o usuário para a FAQ

Comportamento:

- não há JavaScript dedicado da home
- a experiência é conduzida por HTML, CSS e includes compartilhados

### FAQ

Arquivos:

- `faq/index.html`
- `faq/styles.css`
- `faq/script.js`

Responsabilidades:

- responder dúvidas recorrentes
- detalhar protocolos de uso
- reforçar alertas e limites de consumo

Comportamento:

- o acordeão permite foco sequencial de leitura
- `faq/script.js` controla abertura, fechamento, `aria-expanded` e recálculo de altura
- o aviso legal é montado pelo include compartilhado

## Manutenção

### Regras de atualização

- registrar mudanças relevantes em `logs/CHANGELOG.md`
- atualizar este arquivo sempre que mudar ownership, estrutura, fluxo de entrada ou estratégia compartilhada
- tratar Home e FAQ como um único sistema visual
- preferir `shared.css` para regras realmente idênticas entre páginas

### Cuidados recorrentes

- validar links relativos entre `home/` e `faq/` após reorganizações
- preservar compatibilidade com GitHub Pages
- preservar compatibilidade com `file:///` ao mexer em componentes compartilhados
- consultar `home/HOME_IMAGE_GUIDE.txt` antes de trocar imagens ou enquadramentos da home
- remover assets órfãos e duplicados quando não participarem das páginas oficiais

### Checklist rápido pós-alteração

- validar `index.html -> home/ -> faq/`
- validar retorno da FAQ para a Home
- revisar visual em mobile e desktop
- conferir hero, galeria e CTA da Home
- revisar funcionamento do acordeão da FAQ
- confirmar que não surgiram referências quebradas de assets
- atualizar `logs/CHANGELOG.md` se a mudança for estrutural, visual relevante ou comportamental

## Notas de evolução

Hoje o projeto não possui:

- backend
- modelos de domínio formais
- serviços
- jobs
- build
- CI/CD
- configuração por ambiente

Se o projeto crescer, a evolução recomendada é leve:

- manter `SITE_ARCHITECTURE.md` como visão operacional do estado atual
- manter o detalhamento histórico no `CHANGELOG.md`
- introduzir camadas novas apenas quando houver necessidade real de conteúdo dinâmico, automação ou múltiplos fluxos de publicação
