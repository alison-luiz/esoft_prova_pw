const lista = document.getElementById("lista-favoritos");
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

if (favoritos.length) {
    for (let favorito of favoritos) {
        const li = document.createElement("li")
        li.textContent = favorito;

        lista.appendChild(li);
    }
}
