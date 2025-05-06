async function fetchAnime() {
    try {
      const response = await fetch('https://api.jikan.moe/v4/anime?q=naruto');
      const json = await response.json();
      const animeList = json.data;
  
      const container = document.getElementById("anime-container");
      container.innerHTML = ""; // Leegmaken
  
      animeList.forEach(anime => {
        const animeItem = document.createElement("div");
        animeItem.classList.add("anime-item");
  
        animeItem.innerHTML = `
          <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
          <h2>${anime.title}</h2>
          <p>Score: ${anime.score || "Geen score"}</p>
        `;
  
        container.appendChild(animeItem);
      });
  
    } catch (error) {
      console.error("Fout bij ophalen anime:", error);
    }
  }
  
  fetchAnime();
  