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
