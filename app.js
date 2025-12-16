const contenedor = document.getElementById("contenedorNoticias");
const btn = document.getElementById("btnRefrescar");

async function cargarNoticias() {
  contenedor.innerHTML = "<p>Cargando noticias...</p>";

  try {
    const res = await fetch("noticias.json");
    const data = await res.json();

    mostrarNoticias(data.articles);

  } catch (error) {
    contenedor.innerHTML = "<p>Error al cargar noticias</p>";
  }
}

function mostrarNoticias(noticias) {
  contenedor.innerHTML = "";

  noticias.forEach(n => {
    const div = document.createElement("div");
    div.className = "noticia";

    div.innerHTML = `
      <h2>
        <a href="${n.url}" target="_blank" rel="noopener noreferrer">
          ${n.title}
        </a>
      </h2>
      <p>${n.description}</p>
      <span class="categoria">${n.categoria}</span>
    `;

    contenedor.appendChild(div);
  });
}

btn.addEventListener("click", cargarNoticias);
cargarNoticias();