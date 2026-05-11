# Guia Tecnico De Imagens Do Site

Este documento mapeia as imagens usadas no site NeuroFlash e define orientacoes para substituicao, proporcao, crop e nomenclatura.

## Indice

1. [Visao Geral](#1-visao-geral)
2. [Imagens Compartilhadas](#2-imagens-compartilhadas)
3. [Home](#3-home)
4. [Quem Somos](#4-quem-somos)
5. [FAQ](#5-faq)
6. [Regras Gerais De Producao](#6-regras-gerais-de-producao)

## 1. Visao Geral

- O site e estatico e nao usa pipeline de otimizacao automatica.
- Todas as imagens devem ser salvas ja otimizadas antes de entrar no projeto.
- Nomes de arquivos devem ser ASCII, sem acentos, cedilha ou espacos.
- Preferir JPG para fotos e PNG apenas para icones, transparencias ou artefatos especificos.
- Sempre declarar `width` e `height` no HTML quando a imagem aparecer como `<img>`.
- Imagens abaixo da dobra devem usar `loading="lazy"` e `decoding="async"`.
- Imagens criticas do primeiro impacto visual nao devem usar lazy loading.

## 2. Imagens Compartilhadas

### 2.1 Background Global

- Arquivo: `shared/background-neuroflash.jpg`
- Uso: fundo canonico compartilhado aplicado no `body` de Home, Quem Somos e FAQ.
- Dimensao real: 843 x 1264 px
- Orientacao: vertical
- Crop: usado como `background-size: cover`; deve manter o ponto de interesse no centro.
- Observacao: por ser imagem de identidade global, evitar substituicoes que mudem drasticamente a atmosfera escura, energetica e premium.

### 2.2 Icones De Suporte E Contato

- Arquivo: `shared/essentia-health-logo.png`
- Uso: logo institucional da Essentia Health no rodape compartilhado.
- Dimensao HTML: 1504 x 768 px

Orientacoes:

- Preservar legibilidade do nome e do subtitulo em tamanho reduzido.
- Se trocar o arquivo, manter nome estavel ou atualizar `shared/includes.js`.
- Revisar Home, Quem Somos e FAQ, porque o rodape e compartilhado.

- Arquivo: `shared/icons/email.png`
- Uso: icone de e-mail no rodape.
- Dimensao HTML: 18 x 18 px

- Arquivo: `shared/icons/instagram.png`
- Uso: icone de Instagram no rodape.
- Dimensao HTML: 18 x 18 px

- Arquivo: `shared/icons/whatsapp.png`
- Uso: icone de WhatsApp no rodape.
- Dimensao HTML: 18 x 18 px

Orientacoes:

- Manter icones simples, legiveis em tamanho pequeno e com contraste adequado.
- Se trocar arquivos, preservar nomes e dimensoes visuais equivalentes.

## 3. Home

### 3.1 Hero Principal

- Arquivo: `home/hero-focus.jpg`
- Uso: primeira imagem do carrossel desktop da hero.
- Dimensao real: 2200 x 1400 px
- Dimensao HTML: 2200 x 1400 px
- Proporcao: 11:7
- Prioridade: imagem critica, carregamento imediato.

- Arquivo: `home/hero-focus2.jpg`
- Uso: slide adicional do carrossel desktop da hero.
- Dimensao real: 2200 x 1400 px
- Dimensao HTML: 2200 x 1400 px
- Proporcao: 11:7
- Prioridade: carregamento sob demanda via JavaScript.

- Arquivo: `home/hero-focus3.jpg`
- Uso: slide adicional do carrossel desktop da hero.
- Dimensao real: 2200 x 1400 px
- Dimensao HTML: 2200 x 1400 px
- Proporcao: 11:7
- Prioridade: carregamento sob demanda via JavaScript.

Orientacoes:

- O carrossel e desktop-only em tempo de rede.
- As tres imagens devem manter enquadramento compativel, com assunto principal seguro no centro.
- Evitar texto embutido nas imagens.
- A primeira imagem deve continuar sendo a mais forte para o primeiro impacto visual.

### 3.2 Packshot Do Produto

- Arquivo: `home/product-packshot2.jpg`
- Uso: imagem principal do produto na Home.
- Dimensao real: 1400 x 2333 px
- Dimensao HTML: 1400 x 2333 px
- Orientacao: vertical
- Prioridade: imagem critica, carregamento imediato.

Orientacoes:

- Manter a embalagem inteira visivel.
- Evitar crop agressivo nas bordas.
- Fundo pode ser transparente visualmente ou escuro, mas precisa preservar contraste com o layout.
- Esta imagem tambem serve como referencia principal para criativos, kits comerciais e posts sociais.

### 3.3 Cards De Destaques

- Arquivo: `home/mental-ignition.jpg`
- Uso: card de conceito visual.
- Dimensao real: 1600 x 1200 px
- Dimensao HTML: 1200 x 900 px
- Proporcao HTML: 4:3

- Arquivo: `home/focus-lock.jpg`
- Uso: card de conceito visual.
- Dimensao real: 1024 x 1024 px
- Dimensao HTML: 1200 x 900 px
- Proporcao HTML: 4:3

- Arquivo: `home/pressure-mode.jpg`
- Uso: card de conceito visual.
- Dimensao real: 1264 x 843 px
- Dimensao HTML: 1200 x 900 px
- Proporcao HTML: 4:3

- Arquivo: `home/clarity-rush.jpg`
- Uso: card de conceito visual.
- Dimensao real: 1365 x 768 px
- Dimensao HTML: 1200 x 900 px
- Proporcao HTML: 4:3

Orientacoes:

- As imagens sao exibidas em cards com crop controlado.
- Manter assunto principal em area central.
- Evitar detalhes importantes muito proximos das bordas.

### 3.4 Cards De Modos De Uso

- Arquivo: `home/treino.jpg`
- Uso: contexto de treino intenso.
- Dimensao real: 1364 x 768 px
- Dimensao HTML: 1600 x 1000 px
- Proporcao HTML: 8:5

- Arquivo: `home/estudo.jpg`
- Uso: contexto de estudos, provas e concentracao.
- Dimensao real: 1365 x 768 px
- Dimensao HTML: 1600 x 1000 px
- Proporcao HTML: 8:5

- Arquivo: `home/game-competicao.jpg`
- Uso: contexto de jogos, competicao e alta pressao.
- Dimensao real: 1264 x 842 px
- Dimensao HTML: 1600 x 1000 px
- Proporcao HTML: 8:5

Orientacoes:

- Imagens devem comunicar uso sem sugerir promessa medica ou resultado garantido.
- Usar cenas de rotina intensa, foco e pressao de forma comercialmente cuidadosa.
- Manter compatibilidade com textos sobrepostos quando necessario.

### 3.5 Galeria Visual

- Arquivo: `home/motocross.jpg`
- Uso: galeria de intensidade e acao.
- Dimensao real: 1200 x 900 px
- Dimensao HTML: 1200 x 900 px
- Proporcao: 4:3

- Arquivo: `home/homem-terno.jpg`
- Uso: galeria de rotina profissional e alta demanda.
- Dimensao real: 1200 x 900 px
- Dimensao HTML: 1200 x 900 px
- Proporcao: 4:3

- Arquivo: `home/mulher-ufc.jpg`
- Uso: galeria de intensidade e esporte.
- Dimensao real: 1200 x 900 px
- Dimensao HTML: 1200 x 900 px
- Proporcao: 4:3

Orientacoes:

- Preservar proporcao 4:3 quando substituir.
- Manter diversidade visual entre esporte, trabalho e acao.
- Evitar imagens genericas sem relacao clara com alta demanda, foco ou energia.

## 4. Quem Somos

### 4.1 Imagem Dos Fundadores

- Arquivo: `quem-somos/fundadores.jpg`
- Uso: imagem institucional dos fundadores.
- Dimensao real: 944 x 1124 px
- Orientacao: vertical

Orientacoes:

- Manter os rostos bem enquadrados.
- Evitar cortes no topo da cabeca e nos ombros.
- Priorizar imagem real e institucional, sem aparencia de banco de imagens.
- Ao substituir, revisar a pagina em desktop e mobile.

## 5. FAQ

### 5.1 Imagem Social Da FAQ

- Arquivo de referencia: `shared/background-neuroflash.jpg`
- Uso: imagem social nos metadados Open Graph/Twitter da FAQ.
- Dimensao real: 843 x 1264 px
- Observacao: manter metadados de tipo, largura e altura alinhados ao arquivo real.

## 6. Regras Gerais De Producao

- Exportar fotos em JPG com compressao visualmente limpa.
- Evitar arquivos pesados sem necessidade.
- Remover metadados embutidos antes da publicacao publica quando possivel.
- Confirmar que o nome do arquivo no HTML corresponde exatamente ao arquivo real.
- Usar nomes descritivos, curtos e estaveis.
- Nao trocar extensoes sem atualizar HTML, CSS, metadados e documentacao.
- Revisar crop em mobile e desktop apos qualquer troca.
- Nao inserir promessas comerciais ou medicas dentro das imagens.
- Para criativos externos ao site, usar este guia como referencia de assets, nao como lista obrigatoria de layout.
