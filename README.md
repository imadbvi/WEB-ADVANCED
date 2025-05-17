<h1>Anime Finder – Web Advanced Project</h1>

<p>Dit is een interactieve single-page webapplicatie die anime opzoekt via de [Jikan API](https://docs.api.jikan.moe/).  
Gebruikers kunnen zoeken op naam, filteren op type, sorteren op score, afleveringen of populariteit en hun favoriete anime opslaan of verwijderen uit localStorage.</p>


<h2>🔍 Functionaliteiten</h2>

- 🔎 Zoeken op titel
- 🧩 Filteren op type anime (TV, Movie, Special)
- ↕️ Sorteren op titel, score, populariteit of afleveringen
- ❤️ Favorieten opslaan via localstorage
- 🗑️ Favorieten verwijderen
- 📄 Favorieten tonen op de pagina
- 🔁 Data ophalen via externe API (Jikan)



<h2>⚙️ Technische vereisten toegepast</h2>

| Vereiste                         | lijnnummers    | Waar in code?                                  
|----------------------------------|----------------|------------------------------------------------
| ✅ Elementen selecteren          |26,30          | `document.getElementById`, `createElement`     
| ✅ Elementen manipuleren         |31,33,46       | `innerHTML`, `classList.add`, `appendChild`    
| ✅ Events koppelen               |45,80          | `addEventListener`                   
| ✅ Constanten (`const`)          |11,12,...      | overal in `main.js` gebruikt                   
| ✅ Template literals             |34-39,105-110  | HTML string met `...${anime.title}`                            
| ✅ Iteratie & array methodes     |29,17,68,73,125| `forEach`, `sort`, `some`, `push`, `filter`    
| ✅ Arrow functions               |45             | `() => {}` syntax                    
| ✅ Ternary operator              |36,107         | `anime.score || "Geen score"`                  
| ✅ Callback functions            |29,100         | `animeList.forEach(anime => {...})`,`favorites.forEach(...) `          
| ✅ Promises & async/await        |2,11,12        | `async function`,`fetchAnime()` ,`await fetch()`
| ✅ Fetch & JSON                  |11,12          | `await fetch`, `.json()`                    
| ✅ LocalStorage                  |66,74,         | `getItem`, `setItem`, `JSON.stringify`                 
| ❌ Formulier validatie           | \              | niet gedaan                                    
| ✅ Styling & layout              | ✔             | `style.css`, grid layout, kleuren, knoppen     
| ✅ Tooling: Vite project         | ✔             | `npm create vite`, projectstructuur            
| ❌ Observer API                  | \              | Niet gedaan                                    


<h2>📦 Installatiehandleiding</h2>

Volg deze stappen om het project lokaal op te starten met Vite:
<h3>Repository klonen</h3>
git clone https://github.com/imadbvi/WEB-ADVANCED.git

cd WEB-ADVANCED
<h3>Dependencies installeren</h3>
npm install
<h3>Development server starten</h3>
npm run dev
<h3>Open daarna je browser op:</h3>
http://localhost:5173

<h2>🌐 Gebruikte API</h2>

 - Jikan API – Unofficiële MyAnimeList API
     https://docs.api.jikan.moe

 <h2>🖼️ Screenshots</h2>
   <h3>🔹 Startpagina</h3>
   ![startpagina-screen](https://github.com/user-attachments/assets/86f2a99a-ca30-462d-b708-b02f89549c87)

   <h3>🔹 Zoekresultaten</h3>
   ![zoekresultaat-screen](https://github.com/user-attachments/assets/108dc474-87f9-437c-bec3-7b41bfe81f66)

   <h3>🔹 Favorietenlijst</h3> 
   ![favorietenlijst-screen](https://github.com/user-attachments/assets/66815ebf-1902-4d5a-bcb6-c93969da3761)


 <h2>📚 Bronnen</h2>
 Bro Code. (2021, 1 september). Learn HTML in 1 hour 🌎 [Video]. YouTube. https://www.youtube.com/watch?v=HD13eq_Pmp8
 
 Bro Code. (2021b, september 8). Learn CSS in 1 hour 🎨 [Video]. YouTube. https://www.youtube.com/watch?v=wRNinF7YQqQ
 
 Traversy Media. (2019, 13 maart). JavaScript crash course for beginners [Video]. YouTube. https://www.youtube.com/watch?v=hdI2bqOjy3c
 
 W3Schools.com. (z.d.). https://www.w3schools.com/html/
 
 W3Schools.com. (z.d.-b). https://www.w3schools.com/js/DEFAULT.asp
 
 W3Schools.com. (z.d.-c). https://www.w3schools.com/css/
 
 @irfanDahir. (z.d.). Jikan REST API v4 Docs. https://docs.api.jikan.moe/
 
 Redirecting. (z.d.). https://canvas.ehb.be/courses/39258
 
 ![Screenshot 2025-05-17 121344](https://github.com/user-attachments/assets/38831c73-5ac0-4d4f-950a-cca0b52a1e48)
 
 ![Screenshot 2025-05-17 121616](https://github.com/user-attachments/assets/de308374-8efc-4644-8dbf-306d2d72ff0d)
 
 ![Screenshot 2025-05-17 122143](https://github.com/user-attachments/assets/d72a56d0-fd06-49b0-b339-440d5ee878cc)
 
 ![Screenshot 2025-05-17 122209](https://github.com/user-attachments/assets/52791e76-73fc-41e5-bedf-2b97af8babfd)

 ![Screenshot 2025-05-17 123114](https://github.com/user-attachments/assets/a6fa6946-67ce-433e-a4fd-e2090b1a40d7)

 ![Screenshot 2025-05-17 123132](https://github.com/user-attachments/assets/26ef28ed-7771-4bbc-94b4-7fe440613aa8)

 ![Screenshot 2025-05-17 123255](https://github.com/user-attachments/assets/8cb5ffad-e964-4727-b247-542e3da150af)

![Screenshot 2025-05-17 123624](https://github.com/user-attachments/assets/e4a064e9-7569-4a2d-9f6c-0eef9ea49886)

![Screenshot 2025-05-17 123638](https://github.com/user-attachments/assets/29b14b2d-1dcf-4c4f-9536-11ade7d4d78a)

![Screenshot 2025-05-17 123655](https://github.com/user-attachments/assets/8293cf85-8466-4a75-b4ac-f964ee96d822)

![Screenshot 2025-05-17 123708](https://github.com/user-attachments/assets/7fd6b361-5596-441b-83e5-5a968761ca81)

![Screenshot 2025-05-17 123721](https://github.com/user-attachments/assets/7f5dafae-bac6-4522-8dc5-723f6afddd61)

![Screenshot 2025-05-17 123945](https://github.com/user-attachments/assets/f78f93bc-5cfa-4d89-b954-26cba6cd0a5e)

![Screenshot 2025-05-17 123957](https://github.com/user-attachments/assets/30a3d4fe-3f5a-4078-a72f-7ee091e63330)












