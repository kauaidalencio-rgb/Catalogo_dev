document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const cardContainer = document.getElementById('card-container');
    const campoBusca = document.getElementById('campo-busca');
    const botaoBusca = document.getElementById('botao-busca');
    const filtroTipo = document.getElementById('filtro-tipo');
    const filtroGenero = document.getElementById('filtro-genero');
    const anoMinSlider = document.getElementById('ano-min');
    const anoMaxSlider = document.getElementById('ano-max');
    const anoMinValor = document.getElementById('ano-min-valor');
    const anoMaxValor = document.getElementById('ano-max-valor');
    const sliderTrack = document.querySelector('.slider-track');

    let dados = [];

    // Carregar dados do JSON
    async function carregarDados() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            dados = await response.json();
            popularFiltros();
            configurarSliders();
            adicionarEventListeners();
            filtrarEExibir();
        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
            cardContainer.innerHTML = "<p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>";
        }
    }

    // Popular os filtros <select> dinamicamente
    function popularFiltros() {
        const tipos = [...new Set(dados.map(item => item.tipo).filter(Boolean))];
        const generos = [...new Set(dados.map(item => item.genero).filter(Boolean))];

        tipos.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo;
            option.textContent = tipo;
            filtroTipo.appendChild(option);
        });

        generos.forEach(genero => {
            const option = document.createElement('option');
            option.value = genero;
            option.textContent = genero;
            filtroGenero.appendChild(option);
        });
    }

    // Configurar os sliders de ano
    function configurarSliders() {
        const anos = dados.map(item => item.ano).filter(Boolean);
        const minAno = Math.min(...anos);
        const maxAno = Math.max(...anos);

        anoMinSlider.min = minAno;
        anoMinSlider.max = maxAno;
        anoMinSlider.value = minAno;
        anoMinValor.textContent = minAno;

        anoMaxSlider.min = minAno;
        anoMaxSlider.max = maxAno;
        anoMaxSlider.value = maxAno;
        anoMaxValor.textContent = maxAno;
    }

    // Adicionar todos os event listeners
    function adicionarEventListeners() {
        botaoBusca.addEventListener('click', filtrarEExibir);
        campoBusca.addEventListener('keyup', filtrarEExibir);
        filtroTipo.addEventListener('change', filtrarEExibir);
        filtroGenero.addEventListener('change', filtrarEExibir);
        anoMinSlider.addEventListener('input', handleSliderChange);
        anoMaxSlider.addEventListener('input', handleSliderChange);
    }

    // Lidar com a mudança dos sliders
    function handleSliderChange() {
    let minVal = parseInt(anoMinSlider.value);
    let maxVal = parseInt(anoMaxSlider.value);

    if (minVal > maxVal - 1) {
        if (this.id === "ano-min") {
            minVal = maxVal - 1;
            anoMinSlider.value = minVal;
        } else {
            maxVal = minVal + 1;
            anoMaxSlider.value = maxVal;
        }
    }

    anoMinValor.textContent = minVal;
    anoMaxValor.textContent = maxVal;

    atualizarCorDaBarra(); // CHAMA O GRADIENTE

    filtrarEExibir();
    }

    function atualizarCorDaBarra() {
    const min = parseInt(anoMinSlider.value);
    const max = parseInt(anoMaxSlider.value);

    const minRange = parseInt(anoMinSlider.min);
    const maxRange = parseInt(anoMinSlider.max);

    const porcentagemMin = ((min - minRange) / (maxRange - minRange)) * 100;
    const porcentagemMax = ((max - minRange) / (maxRange - minRange)) * 100;

    sliderTrack.style.background = `
        linear-gradient(to right,
            #3c4043 ${porcentagemMin}%,
            #8ab4f8 ${porcentagemMin}%,
            #8ab4f8 ${porcentagemMax}%,
            #3c4043 ${porcentagemMax}%
        )`;
}


    // Função principal para filtrar e exibir os dados
    function filtrarEExibir() {
        const termoBusca = campoBusca.value.toLowerCase();
        const tipoSelecionado = filtroTipo.value;
        const generoSelecionado = filtroGenero.value;
        const anoMin = parseInt(anoMinSlider.value);
        const anoMax = parseInt(anoMaxSlider.value);

        const resultados = dados.filter(item => {
            const buscaValida = !termoBusca || 
                                item.nome?.toLowerCase().includes(termoBusca) || 
                                item.descricao?.toLowerCase().includes(termoBusca);
            
            const tipoValido = !tipoSelecionado || item.tipo === tipoSelecionado;
            const generoValido = !generoSelecionado || item.genero === generoSelecionado;
            const anoValido = !item.ano || (item.ano >= anoMin && item.ano <= anoMax);

            return buscaValida && tipoValido && generoValido && anoValido;
        });

        renderizarCards(resultados);
    }

    // Renderizar os cards na tela
    function renderizarCards(items) {
        cardContainer.innerHTML = "";

        if (items.length === 0) {
            cardContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
            return;
        }

        items.forEach(item => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-media">
                    <img src="${item.imagem || 'img/placeholder.jpg'}" alt="Capa de ${item.nome}" loading="lazy" onerror="this.src='img/placeholder.jpg'">
                </div>
                <div class="card-content">
                    <h2>${item.nome || 'Título indisponível'}</h2>
                    <p class="meta">
                        <strong>Ano:</strong> ${item.ano || 'N/A'} • 
                        <strong>Tipo:</strong> ${item.tipo || 'N/A'} • 
                        <strong>Gênero:</strong> ${item.genero || 'N/A'}
                        <strong>Avaliação:</strong> ${item.avaliacao || 'N/A'}
                    </p>
                    <p>${item.descricao || 'Sem descrição.'}</p>
                    ${item.link 
        ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">
             Trailer ${item.tipo === 'Filme' ? 'do Filme' : item.tipo === 'Série' ? 'da Série' : ''}
           </a>`
        : ''
    }
                </div>
            `;
            cardContainer.appendChild(card);
        });
    }

    // Iniciar a aplicação
    atualizarCorDaBarra();
    carregarDados();
    configurarSliders();
});
