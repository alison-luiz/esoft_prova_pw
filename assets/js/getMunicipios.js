const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lista = document.getElementById("lista-municipios");
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
const uf = urlParams.get("uf");

if (uf) {
    document.title = `Municípios de ${uf}`;

    const header = document.querySelector('header');
    const h1 = document.createElement("h1")
    h1.textContent = `Municípios de ${uf}`;
    header.appendChild(h1);

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    const dataMunicipios = fetch(url);

    dataMunicipios.then((response) => response.json()).then((data) => {
        const municipios = Object.values(data);

        for (let municipio of municipios) {
            adicionarMunicipioNaLista(municipio.nome);
        }
    })

}

function adicionarMunicipioNaLista(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const button = document.createElement("button");
    button.type = "submit"
    button.value = text;
    button.textContent = 'Favoritar';

    button.addEventListener('click', () => {
        adicionarFavorito(text);
    });

    li.appendChild(button);

    lista.appendChild(li);
}

console.log(favoritos);

function adicionarFavorito(text) {

    if (!favoritos.includes(text)) {
        favoritos.push(text);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));    
    }
}