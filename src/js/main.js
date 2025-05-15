// Haalt animegegevens op van de Jikan API met optionele zoekterm, typefilter en sorteervolgorde
async function fetchAnime(searchTerm = "naruto", typeFilter = "", sortFilter = "") {
    // Basis-URL met zoekterm
    let url = `https://api.jikan.moe/v4/anime?q=${searchTerm}`;
    // Als er een typefilter is opgegeven (bv. tv, movie), voeg dit toe aan de URL
    if (typeFilter !== "") {
        url += `&type=${typeFilter}`;
    }
    try {
        // Ophalen van de gegevens van de API
        const response = await fetch(url);
        const json = await response.json();
        let animeList = json.data;

        // Sorteren op basis van opgegeven sorteervolgorde
        if (sortFilter === "title") {
            animeList.sort((a, b) => a.title.localeCompare(b.title));// alfabetisch
        } else if (sortFilter === "score") {
            animeList.sort((a, b) => (b.score || 0) - (a.score || 0));// hoogste score eerst
        } else if (sortFilter === "populariteit") {
            animeList.sort((a, b) => (a.popularity || 0) - (b.popularity || 0));// laagste populariteit = populairst
        } else if (sortFilter === "afleveringen") {
            animeList.sort((a, b) => (b.episodes || 0) - (a.episodes || 0));// meeste afleveringen eerst
        }
        // Selecteer de container in de HTML en maak deze leeg
        const container = document.getElementById("anime-container");
        container.innerHTML = "";
        // Voor elk anime-object wordt HTML gegenereerd en toegevoegd aan de pagina
        animeList.forEach(anime => {
            const animeItem = document.createElement("div");
            animeItem.classList.add("anime-item");
            // HTML structuur voor elke anime
            animeItem.innerHTML = `
          <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
          <h2>${anime.title}</h2>
          <p>Score: ${anime.score || "Geen score"}</p>
          <p>Type: ${anime.type}</p>
          <p>Afleveringen: ${anime.episodes || "Onbekend"}</p>
          <p>Populariteit: ${anime.popularity}</p>

        `;
            // Voeg favorietenknop toe en koppel event listener
            const favButton = document.createElement("button");
            favButton.textContent = "favoriet";
            favButton.addEventListener("click", () => addFavorite(anime));
            animeItem.appendChild(favButton);
            // Voeg de anime toe aan de container
            container.appendChild(animeItem);
        });

    } catch (error) {
        // Foutafhandeling indien API call mislukt
        console.error("Er is iets misgelopen:", error);
    }
}

// Roept fetchAnime standaard op bij het laden van de pagina
fetchAnime();
// Voeg een anime toe aan de favorietenlijst in localStorage
function addFavorite(anime) {
    if (!anime || !anime.mal_id) {
        console.error("Geen geldige anime ontvangen:", anime);
        return;
    }
    // Haal bestaande favorieten op of begin met lege lijst
    const favo = JSON.parse(localStorage.getItem("favoriet")) || [];
    // Controleer of anime al in de favorieten zit
    if (favo.some(f => f.mal_id === anime.mal_id)) {
        alert("Deze anime staat al in je favorieten!");
        return;
    }
    // Voeg toe en sla op in localStorage
    favo.push(anime);
    localStorage.setItem("favoriet", JSON.stringify(favo));
    alert("Toegevoegd bij favorieten!");
}


// Zoekfunctie: haalt waarden uit inputvelden en voert zoekopdracht uit
document.getElementById("search-button").addEventListener("click", () => {
    const searchTerm = document.getElementById("search-input").value;
    const typeFilter = document.getElementById("type-filter").value;
    const sortFilter = document.getElementById("sort-filter").value;
    fetchAnime(searchTerm, typeFilter, sortFilter);
});

// Toon alle opgeslagen favorieten wanneer op de knop wordt geklikt
document.getElementById("show-favorites").addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("favoriet")) || [];

    const container = document.getElementById("anime-container");
    container.innerHTML = "";
    // Toon melding als er geen favorieten zijn
    if (favorites.length === 0) {
        container.innerHTML = "<p>Geen favorieten gevonden.</p>";
        return;
    }

    // Toon elke favoriete anime
    favorites.forEach(anime => {
        const animeItem = document.createElement("div");
        animeItem.classList.add("anime-item");

        animeItem.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
            <h2>${anime.title}</h2>
            <p>Score: ${anime.score || "Geen score"}</p>
            <p>Type: ${anime.type}</p>
            <p>Afleveringen: ${anime.episodes || "Onbekend"}</p>
            <p>Populariteit: ${anime.popularity || "?"}</p>
        `;
        // Voeg verwijderknop toe en koppel functie
        const removeButton = document.createElement("button");
        removeButton.textContent = "Verwijderen";
        removeButton.addEventListener("click", () => removeFavorite(anime.mal_id));
        animeItem.appendChild(removeButton);

        container.appendChild(animeItem);
    });
});

// Verwijdert een anime uit de favorietenlijst
function removeFavorite(malId) {
    const favorieten = JSON.parse(localStorage.getItem("favoriet")) || [];
    const nieuweLijst = favorieten.filter(anime => anime.mal_id !== malId);
    // Opslaan van de aangepaste lijst zonder de verwijderde anime
    localStorage.setItem("favoriet", JSON.stringify(nieuweLijst));
    alert("Verwijderd uit favorieten!");
    // Vernieuw de favorietenweergave
    document.getElementById("show-favorites").click(); // lijst opnieuw tonen
}