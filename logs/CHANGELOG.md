# CHANGELOG

## Objetivo

Este arquivo registra os marcos relevantes da evolução do site Neuroflash. Ele deve permanecer curto, legível e focado em mudanças que alteram estrutura, comportamento, documentação ou direção de manutenção.

## Como registrar novas entradas

Use sempre o formato abaixo:

```md
## YYYY-MM-DD - Título da mudança

- Mudança: resumo objetivo do que foi alterado.
- Impacto: efeito da mudança no projeto, na manutenção ou na experiência.
```

Regras de registro:

- agrupar microajustes do mesmo dia e do mesmo tema em uma única entrada
- separar entradas apenas quando a natureza da mudança for diferente
- usar o `SITE_ARCHITECTURE.md` para o estado atual e este arquivo para a trilha histórica

## Histórico consolidado

## 2026-05-07 - Criação da documentação-base e limpeza estrutural inicial

- Mudança: criados o `CHANGELOG.md` e o mapeamento inicial da arquitetura, removidos arquivos legados da raiz e simplificada a estrutura oficial do projeto em torno de `index.html`, `home/` e `faq/`.
- Impacto: estabeleceu uma base documental para evolução futura e reduziu o risco de manutenção sobre código e arquivos que já não participavam das páginas oficiais.

## 2026-05-07 - Ajustes visuais da home, da FAQ e do guia técnico de imagens

- Mudança: refinados topo, packshot, galeria e enquadramentos da home, removida a animação de abertura da FAQ e criado/ajustado o `HOME_IMAGE_GUIDE.txt` para orientar manutenção de imagens.
- Impacto: melhorou a consistência visual entre mobile e desktop, estabilizou a leitura da embalagem do produto e deixou uma referência técnica prática para futuras trocas de assets.

## 2026-05-08 - Consolidação do topo e da navegação entre Home e FAQ

- Mudança: unificado o header das páginas, alinhados branding, menu, contornos e linhas estruturais, corrigindo diferenças entre mobile e desktop e removendo elementos duplicados na FAQ.
- Impacto: reduziu inconsistências visuais entre as páginas oficiais e estabilizou o comportamento do topo em diferentes larguras de tela.

## 2026-05-08 - Refatoração da base compartilhada de estilo e comportamento

- Mudança: consolidada a base comum em `shared.css`, padronizados componentes visuais compartilhados, simplificado o JavaScript do acordeão da FAQ e centralizado o background oficial em `background-neuroflash.jpg` na raiz.
- Impacto: reduziu duplicação entre Home e FAQ, deixou ownership mais claro entre estilos compartilhados e locais e diminuiu o custo de manutenção da interface.

## 2026-05-08 - Compatibilidade local e compartilhamento do aviso legal

- Mudança: o aviso legal foi extraído para uma estratégia compartilhada via `shared/includes.js`, primeiro como include client-side e depois ajustado para injeção direta compatível com `file:///`.
- Impacto: eliminou duplicação de markup entre Home e FAQ e garantiu funcionamento consistente tanto no GitHub Pages quanto na abertura local no Windows.

## 2026-05-08 - Enxugamento da documentação arquitetural

- Mudança: o `SITE_ARCHITECTURE.md` foi reescrito em formato operacional curto, com correção de encoding, remoção de repetições e consolidação das informações de estrutura, ownership, comportamento e manutenção.
- Impacto: tornou a documentação mais estável, rápida de atualizar e menos propensa a erros de edição ou ruído de codificação.

## 2026-05-08 - Enxugamento estrutural do CHANGELOG

- Mudança: o próprio `CHANGELOG.md` foi consolidado em blocos temáticos curtos, com agrupamento por dia e assunto, remoção de redundâncias e padronização em português UTF-8.
- Impacto: deixou o histórico mais fácil de consultar, reduziu ruído de microcorreções e estabeleceu um formato mais sustentável para futuras entradas.
