# “Catálogo de Filmes e Séries Investigativas”
# 1. Visão Geral do Projeto

O projeto consiste em uma aplicação web interativa que apresenta um catálogo de filmes e séries do gênero investigativo, permitindo ao usuário explorar, pesquisar e filtrar obras de forma dinâmica e intuitiva.
A interface foi projetada para ser responsiva, moderna e de fácil navegação, oferecendo uma experiência imersiva para quem deseja descobrir produções relacionadas a investigação, crime e mistério.

# 2. Objetivo do Projeto

O objetivo principal é organizar e apresentar informações de forma eficiente, utilizando recursos de filtragem avançada para facilitar a busca por obras específicas.
O sistema permite ao usuário:

Encontrar filmes e séries por nome, tipo, gênero, ano ou descrição.

Visualizar detalhes como capa, descrição, ano de lançamento e gênero.

Acessar links externos como trailers ou páginas oficiais.

O projeto demonstra domínio em HTML, CSS, JavaScript e JSON, aplicando boas práticas de estrutura, organização e manipulação de dados.

# 3. Funcionalidades do Sistema
✔️ Barra de Pesquisa Inteligente

Permite buscar por:

Título

Descrição

Palavras-chave

A busca é feita em tempo real usando JavaScript.

# ✔️ Filtros Dinâmicos

Os filtros são gerados automaticamente com base no conteúdo do arquivo JSON:

Filtro por Tipo: Filme ou Série

Filtro por Gênero: Suspense, Crime, Mistério, etc.

Os filtros são criados dinamicamente para garantir escalabilidade.

# ✔️ Filtro Duplo de Ano (Dual Range Slider)

O usuário pode selecionar:

Ano mínimo

Ano máximo

A barra de seleção é visualmente personalizada, exibindo um gradiente dinâmico que destaca a faixa ativa.

# ✔️ Renderização Automática de Cards

Os cards exibem:

Imagem da capa

Nome da obra

Ano de lançamento

Tipo (Filme/Série)

Gênero

Descrição

Link externo para trailer

Os cards são gerados inteiramente via JavaScript, com tratamento de erros, lazy loading e fallback de imagem.

# ✔️ Carregamento e Leitura via JSON

Os dados das obras são armazenados em data.json, facilitando:

Atualizações rápidas

Organização clara

Separação entre dados e código

# 4. Tecnologias Utilizadas
HTML5

Estrutura do site

Organização semântica

Conteúdo básico dos elementos

CSS3

Tema escuro moderno inspirado em interfaces investigativas

Responsividade completa

Animações e efeitos nos cards

Estilização avançada do dual range slider

JavaScript (ES6+)

Manipulação do DOM

Carregamento do JSON

Sistema de busca

Filtros combinados

Renderização dinâmica

JSON

Armazenamento estruturado das obras

Fácil expansão e manutenção

# 5. Diferenciais Técnicos do Projeto

Filtros inteligentes que combinam múltiplos critérios simultaneamente
(nome, tipo, gênero, ano mínimo e máximo).

Interface responsiva para desktop e mobile.

Slider de ano com gradiente dinâmico, visualmente destacado.

Cards elegantes com hover animado e carregamento otimizado.

Fallback de imagem automático caso o arquivo falhe.

Código organizado e modular, facilitando manutenção e expansão.

Dados separados da lógica, permitindo adicionar novas obras sem tocar no código principal.

# 6. Público-Alvo

Amantes de filmes e séries investigativas

Estudantes e pesquisadores interessados no gênero

Usuários que buscam recomendações organizadas e acessíveis

7. Conclusão

Este projeto demonstra o uso integrado de tecnologias web modernas para criar uma aplicação funcional, visualmente atraente e tecnicamente avançada.
A combinação de filtros dinâmicos, organização de dados em JSON e interface responsiva torna o sistema eficiente e ideal para competições, trabalhos escolares ou como base para projetos maiores.
