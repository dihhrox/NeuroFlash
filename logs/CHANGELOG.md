# CHANGELOG

## Objetivo

Este arquivo registra alteracoes realizadas no codigo do site Neuroflash para consulta futura de contexto, historico tecnico e impacto das mudancas.

## Convencao de registro

Cada nova entrada deve incluir:

- `Data`: no formato `YYYY-MM-DD`
- `Titulo`: resumo curto da mudanca
- `Arquivos alterados`: lista objetiva dos arquivos afetados
- `Descricao`: o que foi feito
- `Impacto/Contexto`: motivo, efeito esperado ou observacoes relevantes

## Modelo de entrada

```md
## YYYY-MM-DD - Titulo da mudanca

- Arquivos alterados: `caminho/arquivo.ext`, `outro/arquivo.ext`
- Descricao: resumo objetivo do que foi alterado.
- Impacto/Contexto: motivo da mudanca, efeito esperado e observacoes importantes.
```

## 2026-05-07 - Criacao do changelog e mapeamento da arquitetura do site

- Arquivos alterados: `CHANGELOG.md`, `SITE_ARCHITECTURE.md`
- Descricao: criado o arquivo oficial de historico de alteracoes e documentada a arquitetura atual do site, incluindo fluxo de entrada, paginas oficiais, assets, CSS, JavaScript e arquivos duplicados na raiz.
- Impacto/Contexto: estabelece uma base de consulta para futuras mudancas no projeto e define que novas alteracoes no codigo devem ser registradas manualmente neste arquivo.

## 2026-05-07 - Limpeza estrutural e remocao de legado da raiz

- Arquivos alterados: `home/index.html`, `home/styles.css`, `CHANGELOG.md`, `SITE_ARCHITECTURE.md`
- Descricao: removidos comentario residual da home, CSS herdado que nao era usado pela landing, e arquivos legados da raiz que nao participavam das paginas oficiais.
- Impacto/Contexto: a estrutura oficial do projeto ficou concentrada em `index.html`, `home/` e `faq/`, com menos codigo morto e menor risco de manutencao sobre arquivos duplicados.

## 2026-05-07 - Ajustes de contorno, packshot, FAQ e guia tecnico de imagens

- Arquivos alterados: `home/styles.css`, `faq/styles.css`, `HOME_IMAGE_GUIDE.txt`, `CHANGELOG.md`, `SITE_ARCHITECTURE.md`
- Descricao: removida a linha duplicada no topo da home, adicionadas variaveis de zoom para o packshot no mobile e desktop, eliminada a animacao de abertura da FAQ e criado um guia tecnico em texto puro com indice e tamanhos ideais das imagens da home.
- Impacto/Contexto: melhora a consistencia visual do topo da home, facilita manutencao do enquadramento do produto, padroniza a FAQ com abertura instantanea em todas as larguras e deixa referencias tecnicas prontas para outros devs.

## 2026-05-07 - Remocao do zoom do packshot e uniformizacao da galeria

- Arquivos alterados: `home/styles.css`, `HOME_IMAGE_GUIDE.txt`, `CHANGELOG.md`, `SITE_ARCHITECTURE.md`
- Descricao: removidas as variaveis e regras de zoom do packshot, alinhado o comportamento visual do produto entre mobile e desktop, uniformizado o tamanho dos tres blocos superiores da galeria e corrigido o guia tecnico no item 6.1.
- Impacto/Contexto: elimina o zoom artificial aplicado no desktop, deixa a galeria mais consistente e corrige a documentacao para refletir o layout e os tamanhos finais desejados.

## 2026-05-07 - Correcao da galeria A/B/C e do packshot desktop

- Arquivos alterados: `home/index.html`, `home/styles.css`, `HOME_IMAGE_GUIDE.txt`, `CHANGELOG.md`, `SITE_ARCHITECTURE.md`
- Descricao: substituida a nomenclatura `gallery-large` por `gallery-small-a`, `gallery-small-b` e `gallery-small-c`, restaurado o grid com tres cards equivalentes na linha superior da galeria e corrigido o enquadramento do packshot no desktop para ficar semelhante ao mobile.
- Impacto/Contexto: corrige a regressao visual da galeria, evita que o item 6.1 extrapole o campo dos demais e melhora a leitura da embalagem do produto na abertura desktop.

## 2026-05-07 - Restauracao da proporcao horizontal da galeria

- Arquivos alterados: `home/styles.css`, `HOME_IMAGE_GUIDE.txt`, `CHANGELOG.md`, `SITE_ARCHITECTURE.md`
- Descricao: ajustada a galeria superior para usar proporcao horizontal consistente com a referencia, substituindo a altura fixa por controle de proporcao, e refinado o enquadramento do packshot desktop.
- Impacto/Contexto: corrige a quebra visual que deixou os cards da galeria em formato vertical e aproxima a leitura do packshot desktop do comportamento visto no mobile.

## 2026-05-07 - Correcao do preenchimento das imagens da galeria A/B/C

- Arquivos alterados: `home/styles.css`, `HOME_IMAGE_GUIDE.txt`, `CHANGELOG.md`
- Descricao: corrigidos os seletores de imagem da galeria superior para usar `gallery-small-a`, `gallery-small-b` e `gallery-small-c`, aplicando posicionamento absoluto, preenchimento total da moldura e alinhamento central.
- Impacto/Contexto: resolve o problema que deixava as imagens soltas dentro das molduras apos a troca de nomenclatura da galeria.

## 2026-05-08 - Barra superior da FAQ alinhada com a home

- Arquivos alterados: `faq/index.html`, `faq/styles.css`, `logs/CHANGELOG.md`
- Descricao: substituida a entrada isolada de retorno da FAQ por uma barra superior com logo, selo `HARDCORE MODE` e menu igual ao da home, incluindo estado ativo para o item `FAQ`.
- Impacto/Contexto: padroniza o topo entre as duas paginas oficiais, melhora a consistencia estetica da navegacao e preserva o hero da FAQ com espacamento ajustado abaixo do novo header.

## 2026-05-08 - Remocao da marca duplicada da FAQ e unificacao estrutural

- Arquivos alterados: `faq/index.html`, `faq/styles.css`, `logs/CHANGELOG.md`
- Descricao: removidos da FAQ o logo textual antigo, a tagline e o selo repetido abaixo da nova barra superior, substituindo o bloco por uma introducao editorial, e alinhados os espacamentos estruturais da FAQ com a malha da home em mobile e desktop.
- Impacto/Contexto: deixa a barra superior como unico ponto de branding da FAQ e uniformiza bordas, larguras uteis e ritmo de espacamento entre as duas paginas oficiais.

## 2026-05-08 - Correcao do contorno mobile da home e simplificacao do menu

- Arquivos alterados: `home/index.html`, `faq/index.html`, `home/styles.css`, `logs/CHANGELOG.md`
- Descricao: simplificado o menu superior das duas paginas para conter apenas `HOME` e `FAQ`, com indicativo verde da pagina atual, e ajustada a home para adotar a mesma base de contorno horizontal da FAQ no mobile, incluindo a borda inferior.
- Impacto/Contexto: evita o sumico das linhas superior e inferior na home em telas pequenas e deixa a navegacao principal mais direta e consistente entre as paginas oficiais.

## 2026-05-08 - Restauracao da linha superior da home no mobile

- Arquivos alterados: `home/styles.css`, `logs/CHANGELOG.md`
- Descricao: adicionada ao `header.home-nav` da home a mesma borda superior em gradiente usada pela FAQ, preservando a borda do `page-shell` no desktop.
- Impacto/Contexto: corrige o ultimo desvio visual do topo da home em telas pequenas e alinha o comportamento da linha superior com a implementacao validada na FAQ.

## 2026-05-08 - Expansao da linha superior da home no desktop

- Arquivos alterados: `home/index.html`, `home/styles.css`, `logs/CHANGELOG.md`
- Descricao: separado o header da home em largura total com um contêiner interno centralizado, permitindo que a borda superior em gradiente alcance as duas bordas da pagina no desktop sem deslocar logo, badge e menu.
- Impacto/Contexto: alinha o comportamento estrutural do topo da home ao padrao visual validado na FAQ e elimina o corte lateral da linha superior em telas largas.

## 2026-05-08 - Correcao da barra mobile da home e reposicionamento da linha do topo

- Arquivos alterados: `home/styles.css`, `logs/CHANGELOG.md`
- Descricao: ajustado o wrapper interno do header da home no mobile para empilhar marca e menu corretamente, adicionada a linha horizontal diretamente ao `header.home-nav` e removido o deslocamento superior da primeira `section-line` para evitar que o divisor do topo aparecesse dentro do conteudo.
- Impacto/Contexto: restaura o comportamento da barra mobile da home, posiciona a linha horizontal imediatamente abaixo do menu e evita duplicacao visual no inicio da primeira secao.

## 2026-05-08 - Reestruturacao da arquitetura operacional do projeto

- Arquivos alterados: `logs/SITE_ARCHITECTURE.md`, `logs/CHANGELOG.md`
- Descricao: reescrito o documento de arquitetura para incluir visao geral ampliada, stack tecnologico completo, ausencia de variaveis de ambiente, estrutura de conteudo, servicos/jobs/models por app em estado atual e modelo-alvo, common hurdles, design patterns e checklist pos-implementacao.
- Impacto/Contexto: transforma a arquitetura em uma referencia operacional mais completa, corrige a localizacao oficial da documentacao para `logs/` e reduz ambiguidades para manutencoes futuras.

## 2026-05-08 - Refatoracao conservadora da base compartilhada do site

- Arquivos alterados: `shared.css`, `home/index.html`, `home/styles.css`, `faq/index.html`, `faq/styles.css`, `faq/script.js`, `logs/CHANGELOG.md`, `logs/SITE_ARCHITECTURE.md`
- Descricao: extraidas regras duplicadas para um arquivo CSS compartilhado, padronizado o header entre home e FAQ, substituido o uso visual indevido de `faq-item` na home por `surface-panel`, removidos seletores legados sem uso da FAQ e simplificado o JavaScript do acordeao com protecoes para markup incompleto.
- Impacto/Contexto: reduz duplicacao entre paginas, melhora manutencao, preserva o comportamento visual esperado e deixa mais claro o ownership entre estilos compartilhados e especificos de cada pagina.

## 2026-05-08 - Limpeza das linhas horizontais e header sticky compartilhado

- Arquivos alterados: `shared.css`, `home/index.html`, `home/styles.css`, `faq/index.html`, `faq/styles.css`, `logs/CHANGELOG.md`, `logs/SITE_ARCHITECTURE.md`
- Descricao: removidas a linha inferior do menu superior e a linha estrutural imediatamente abaixo do topo nas paginas home e FAQ, e transformado o header compartilhado em uma barra sticky com fundo reforcado e separacao suave durante a rolagem.
- Impacto/Contexto: deixa o topo visualmente mais limpo, melhora persistencia da navegacao durante a leitura e preserva a legibilidade do menu sobre imagens e conteudos rolaveis.

## 2026-05-08 - Correcao estrutural do shell para sustentar o header sticky

- Arquivos alterados: `shared.css`, `logs/CHANGELOG.md`
- Descricao: ajustado o `page-shell` para usar `overflow-x: hidden` e `overflow-y: visible`, removendo o bloqueio vertical causado pelo `overflow: hidden` que impedia o header sticky de permanecer preso durante a rolagem.
- Impacto/Contexto: corrige a causa estrutural mais provavel do sumico do menu superior ao descer a pagina, preservando o recorte lateral do shell sem desativar o sticky compartilhado.

## 2026-05-08 - Remocao completa do overflow do shell compartilhado

- Arquivos alterados: `shared.css`, `logs/CHANGELOG.md`
- Descricao: removido por completo o overflow do `page-shell` e deslocada a contencao horizontal para o `body`, evitando que o shell continue sendo interpretado como contêiner de rolagem e atrapalhe o `position: sticky` do header compartilhado.
- Impacto/Contexto: elimina a ultima configuracao de overflow com potencial de sabotar o topo fixo e mantem o bloqueio de vazamento lateral sem prender a navegacao superior ao shell.

## 2026-05-08 - Aviso legal compartilhado entre Home e FAQ via include client-side

- Arquivos alterados: `shared/legal-warning.html`, `shared/includes.js`, `home/index.html`, `faq/index.html`, `logs/CHANGELOG.md`, `logs/SITE_ARCHITECTURE.md`
- Descricao: extraido o bloco de aviso legal do final da home e da FAQ para um fragmento HTML compartilhado, com inclusao client-side via `fetch` em um loader compartilhado compativel com GitHub Pages.
- Impacto/Contexto: elimina duplicacao de markup entre as duas paginas oficiais, preserva o mesmo visual atual do aviso e formaliza a estrategia de componentes HTML compartilhados sem backend, sem build e sem includes de servidor.
