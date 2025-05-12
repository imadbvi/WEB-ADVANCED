async function fetchAnime(searchTerm = "naruto", typeFilter = "", sortFilter = "") {
    let url = `https://api.jikan.moe/v4/anime?q=${searchTerm}`;
    if (typeFilter !== "") {
        url += `&type=${typeFilter}`;
    }
    try {
        const response = await fetch(url);
        const json = await response.json();
        let animeList = json.data;

        if (sortFilter === "title") {
            animeList.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortFilter === "score") {
            animeList.sort((a, b) => (b.score || 0) - (a.score || 0));
        }

        const container = document.getElementById("anime-container");
        container.innerHTML = "";

        animeList.forEach(anime => {
            const animeItem = document.createElement("div");
            animeItem.classList.add("anime-item");

            animeItem.innerHTML = `
          <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
          <h2>${anime.title}</h2>
          <p>Score: ${anime.score || "Geen score"}</p>
          <p>Type: ${anime.type}</p>
          <p>Afleveringen: ${anime.episodes || "Onbekend"}</p>
          <p>Populariteit: ${anime.popularity}</p>

        `;

            const favButton = document.createElement("button");
            favButton.textContent = "favoriet";
            favButton.addEventListener("click", () => addFavorite(anime));
            animeItem.appendChild(favButton);

            container.appendChild(animeItem);
        });

    } catch (error) {
        console.error("Er is iets misgelopen:", error);
    }
}

fetchAnime();

function addFavorite(anime) {
    if (!anime || !anime.mal_id) {
        console.error("Geen geldige anime ontvangen:", anime);
        return;
      }

    const favo = JSON.parse(localStorage.getItem("favoriet")) || [];
  
    if (favo.some(f => f.mal_id === anime.mal_id)) {
      alert("Deze anime staat al in je favorieten!");
      return;
    }
  
    favo.push(anime);
    localStorage.setItem("favoriet", JSON.stringify(favo));
    alert("Toegevoegd bij favorieten!");
  }
  


document.getElementById("search-button").addEventListener("click", () => {
    const searchTerm = document.getElementById("search-input").value;
    const typeFilter = document.getElementById("type-filter").value;
    const sortFilter = document.getElementById("sort-filter").value;
    fetchAnime(searchTerm, typeFilter, sortFilter);
});



document.getElementById("show-favorites").addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("favoriet")) || [];

    const container = document.getElementById("anime-container");
    container.innerHTML = "";

    if (favorites.length === 0) {
        container.innerHTML = "<p>Geen favorieten gevonden.</p>";
        return;
    }

    
    favorites.forEach(anime => {
        const animeItem = document.createElement("div");
        animeItem.classList.add("anime-item");

        animeItem.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
            <h2>${anime.title}</h2>
            <p>Score: ${anime.score || "Geen score"}</p>
            <p>Type: ${anime.type}</p>
        `;

        container.appendChild(animeItem);
    });
});
