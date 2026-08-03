# Planejamento da função Assistente de Dúvidas Rápidas

## Objetivo

Criar um assistente interno que responda perguntas baseadas no conteúdo dos manuais PDF, sem precisar ler o documento inteiro, entregando respostas objetivas e links para a fonte.

---

## 1. Arquitetura proposta

### 1.1. Extração offline dos manuais

- Usar um script Node para extrair texto dos PDFs em `manuais/`.
- Gerar um corpus estruturado com:
  - `id`
  - `title` / `section`
  - `text`
  - `file`
  - `page`
  - `path` (seção ou título)
- Salvar o resultado em JSON ou TS para consumo no frontend.

### 1.2. Indexação offline

- Montar um índice de busca no momento de build, não em tempo real no navegador.
- O índice deve conter:
  - texto completo do parágrafo
  - título da seção
  - palavras-chave extraídas
  - metadados do manual
- Resultado:
  - busca muito mais rápida
  - carga menor no browser
  - maior controle sobre relevância

### 1.3. Busca no frontend

- Carregar o índice pré-gerado no app React.
- Fazer a busca diretamente no browser para respostas instantâneas.
- Exibir:
  - trechos relevantes
  - onde estão no manual
  - botão “Abrir manual” ou “Ver página”
  - talvez link para o item do menu quando fizer sentido

---

## 2. Tecnologias recomendadas

### 2.1. Extração de PDF

- `pdf-parse`
  - Razoável para Node.
  - Consegue ler texto e metadados de PDF.
  - Fácil de usar para gerar corpus offline.
- Alternativa: `pdfjs-dist`
  - se precisar mais controle sobre layout/página.

**Por que?**
- É um processo offline e Node é a ferramenta natural para isso.
- Evita usar o browser para leitura de PDF.

### 2.2. Construção de índice e busca

- `flexsearch`
  - buscador JavaScript muito rápido.
  - ótimo para uso em browser.
  - possui indexação de texto, configuração de relevância, scoring e suporte a campos.
- Alternativa leve: `minisearch`
  - também funciona bem, mas `flexsearch` tende a ser mais rápido em corpora médios/grandes.

**Por que?**
- É otimizado para velocidade em browser.
- Permite buscar textos longos rápido e com pouco consumo de memória.
- Uso offline e sem backend adicional.

### 2.3. Frontend

- `React + TypeScript`
  - já existente no projeto.
- `Tailwind CSS`
  - já presente no projeto.
- `Vite`
  - já usado para build.

**Por que?**
- Permite integração direta com o app atual.
- Mantém consistência visual e performance.

### 2.4. Web Worker (opcional)

- Se o corpus crescer muito, mover a busca para um `Web Worker`.
- Isso evita travar a UI durante consultas mais pesadas.

**Por que?**
- Separar a busca do thread principal melhora a sensação de velocidade.
- É uma otimização de usabilidade.

---

## 3. Fluxo de implementação

### 3.1. Etapa 1 — Extrair os manuais

Criar `scripts/extractManualCorpus.ts`:
- lê os PDFs em `manuais/`
- converte em texto
- divide por página/seção
- salva `manualCorpus.json`

### 3.2. Etapa 2 — Gerar índice

Criar `scripts/buildManualIndex.ts`:
- usa `manualCorpus.json`
- cria índice com `FlexSearch`
- salva:
  - `manualIndex.json`
  - `manualCorpus.json` (para exibir trechos)
- adicionar `npm run build-manual-index`

### 3.3. Etapa 3 — UI de perguntas

Adicionar componente `ManualAssistant`:
- input de pesquisa
- botão “Perguntar”
- lista de resultados
- cada resultado mostra:
  - título/seção
  - trecho do manual
  - origem (manual + página)
  - botão “Abrir manual"

### 3.4. Etapa 4 — Integração com a navegação existente

- incluir o assistente em uma aba ou modal na página principal
- manter o menu original do simulador
- permitir “ir para item do menu” quando a resposta estiver ligada a um menu

### 3.5. Etapa 5 — Otimizações de desempenho

- indexar offline e carregar apenas o índice no browser
- usar `debounce` no campo de busca
- limitar resultados a top 5 ou top 10
- priorizar:
  - títulos
  - seções
  - trecho exato
- considerar `Web Worker` se:
  - mais de 2000 parágrafos
  - ou o índice ficar muito pesado

---

## 4. Algoritmo de busca sugerido

### 4.1. Pré-processamento do corpus

- normalizar texto para minúsculas
- remover acentos
- criar sinônimos/aliases:
  - SIP → “SIP”, “vídeoporteiro”, “terminal de vídeo”
  - “terminal de vídeo” → “CFTV”, “porteiro”
- extrair tokens relevantes

### 4.2. Busca no índice

- usar `FlexSearch.Document` com campos:
  - `title`
  - `section`
  - `text`
  - `keywords`
- ponderar campos:
  - `title` alto
  - `keywords` alto
  - `text` médio
- classificar resultados por score

### 4.3. Resposta final

- para cada resultado, extrair o trecho mais relevante
- mostrar contexto limitado a 2-3 frases
- exibir fonte e página

---

## 5. Tecnologias e por que usar cada uma

| Tecnologia | Uso | Racional |
|---|---|---|
| `pdf-parse` | extrair texto dos PDFs | simples e robusto para Node |
| `FlexSearch` | indexar e pesquisar no browser | alta performance, leve, sem backend |
| React + TypeScript | interface e lógica | já usado no projeto e garante tipagem |
| Tailwind CSS | estilização do assistente | já existente no projeto |
| Web Worker | busca intensa | evita travar a UI em corpora maiores |
| `npm run build-manual-index` | build offline | mantém pesquisa rápida e estável |

---

## 6. Resultado esperado

- pergunta rápida no app
- resposta direta baseada no manual
- sem leitura manual completa
- performance boa mesmo em mobile
- navegação integrada com o simulador

---

## 7. Passos de implementação

1. Extrair texto dos PDFs para um corpus JSON.
2. Criar índice offline usando `FlexSearch`.
3. Adicionar novo componente de busca/assistente.
4. Conectar o assistente ao conteúdo indexado.
5. Otimizar com carregamento preguiçoso, debounce e limites de resultados.
6. Validar com perguntas reais do manual.
7. Ajustar sinônimos e relevância.

---

Se quiser, posso começar pela primeira etapa agora: montar o script de extração dos PDFs e gerar o índice para o frontend.
