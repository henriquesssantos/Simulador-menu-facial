# Simulador de Menu - Controladoras Faciais Intelbras

Um simulador de interface interativo desenvolvido para emular a navegação dos menus das controladoras de acesso facial (linhas SS 3532/42 MF W 2.0).

## Objetivo do Projeto
O principal objetivo deste simulador é **facilitar o dia a dia do time de analistas de suporte técnico**, permitindo que eles consigam visualizar de forma rápida e precisa os menus, telas e caminhos de configurações dos equipamentos. Com o simulador em mãos, a equipe consegue guiar o cliente final pelo telefone ou chat com exatidão, **diminuindo significativamente o tempo de atendimento (TMA)** e melhorando a qualidade do suporte prestado.

## Arquitetura e Tecnologias
O projeto foi estruturado para ser uma aplicação leve, rápida e fácil de hospedar em plataformas estáticas (como o GitHub Pages). 

As principais tecnologias utilizadas são:
- **[React](https://react.dev/)**: Biblioteca front-end para construir componentes de UI reutilizáveis (Sidebar, ContentArea, TreeItem, etc.).
- **[TypeScript](https://www.typescriptlang.org/)**: Fornece tipagem estática e interfaces robustas para a estrutura de dados (menuTree, models).
- **[Vite](https://vitejs.dev/)**: Ferramenta de build de altíssima performance para desenvolvimento local e geração de assets estáticos otimizados.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário usado para construir rapidamente um design moderno, fiel à estética da fabricante e totalmente responsivo.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones vetoriais modernos.

A arquitetura de dados (a árvore de menus) foi completamente isolada da interface (`src/data/menuTree.ts`), o que permite que novos modelos de equipamentos sejam incluídos facilmente no futuro sem necessidade de refatorar a UI principal.

## Estrutura do Projeto
- `/src/components`: Componentes visuais do simulador separados por responsabilidade (layout, ui).
- `/src/data`: Onde a 'magia' acontece. Contém a árvore de dados do menu (`menuTree.ts`) e o mapeamento das capturas de tela (`menuImages.ts`).
- `/public/imagens`: Pasta com as capturas de telas reais dos equipamentos, perfeitamente sincronizadas com a árvore de menus.

## Como executar localmente
Se você deseja rodar ou modificar o projeto no seu computador:

1. Clone o repositório.
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
3. No terminal, execute:
   ```bash
   npm install
   ```
4. Para iniciar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Para gerar a versão de produção (build):
   ```bash
   npm run build
   ```
