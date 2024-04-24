const lista = document.getElementById("lista-estados");

const dataEstados = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');

dataEstados.then((response) => response.json()).then((data) => {
    const estados = Object.values(data);

    for (let estado of estados) {
        adicionarEstadosNaLista(estado.nome, estado.sigla);
    }
})

function adicionarEstadosNaLista(text, uf) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = `./municipios/index.html?uf=${uf}`
    li.appendChild(a);
    lista.appendChild(li);
}