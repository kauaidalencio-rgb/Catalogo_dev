# Catálogo Interativo de Filmes e Séries Investigativas

Este projeto consiste em uma aplicação web interativa desenvolvida com HTML, CSS, JavaScript e JSON, cujo objetivo principal é apresentar um catálogo organizado de filmes e séries do gênero investigativo, permitindo ao usuário explorar títulos, filtrar conteúdos e acessar informações detalhadas de forma rápida, intuitiva e visualmente agradável.

# Objetivo Geral

Oferecer uma plataforma leve e responsiva onde usuários possam pesquisar, filtrar e descobrir obras de investigação, abrangendo filmes, séries, obras policiais, suspense psicológico e narrativas baseadas em crimes reais.

Funcionalidades Principais
# 1. Sistema de Busca Dinâmica

Campo de pesquisa que permite localizar títulos por nome ou descrição.

A filtragem é instantânea, atualizando os resultados conforme o usuário digita.

# 2. Filtros Avançados

Filtro por tipo: Filme ou Série.

Filtro por gênero: Mistério, Crime Real, Noir, Suspense Policial, etc.

Filtro por faixa de ano, incluindo:

Controle dual range slider totalmente funcional.

Visualização do ano mínimo e máximo selecionado.

Barra dinâmica com gradiente indicando a área ativa da seleção.

# 3. Cards Dinâmicos Gerados por JavaScript

Cada obra é exibida por meio de um card, contendo:

Capa da obra (com fallback automático em caso de erro).

Título e ano de lançamento.

Tipo (Filme/Série), gênero e avaliação.

Descrição detalhada.

Link para trailer ou página oficial (IMDB), quando disponível.

Os cards tornam a navegação fluida e melhoram a experiência do usuário.

# 4. Dados Carregados de um Arquivo JSON

O arquivo data.json contém todas as informações das obras.

O JavaScript realiza o fetch dos dados e popula a interface dinamicamente.

Essa separação dos dados permite fácil atualização e expansão do catálogo.

# 5. Layout Responsivo e Acessível

Interface adaptada para diversos tamanhos de tela (mobile, tablet e desktop).

Uso de CSS moderno, variáveis de cor, grid flexível, sombras e animações.

Cabeçalho fixo e filtros centralizados para facilitar o uso.

Tecnologias Utilizadas

HTML5 – Estrutura semântica e acessível da página.

CSS3 – Estilização avançada, responsividade, variáveis CSS e elementos interativos.

JavaScript – Lógica de filtragem, manipulação de DOM, carregamento de dados e atualização dos cards.

JSON – Organização dos dados dos filmes e séries.

Google Fonts (Quicksand) – Melhor legibilidade e apelo visual.

Diferenciais do Projeto

Interface limpa e profissional inspirada em plataformas de streaming.

Filtros combinados altamente eficientes (tipo + gênero + faixa de ano + busca).

Cards detalhados que destacam informações relevantes.

Código modular, organizado e facilmente escalável.

Experiência otimizada para usuários em dispositivos móveis.

# Observação Importante

As capas dos filmes e séries exibidas foram geradas por IA, respeitando as regras de direitos autorais da competição, evitando o uso de imagens protegidas.
