// Displaying Films
function displayFilm(film){
    let card = document.createElement("ul")
    card.className = "card"
    card.innerHTML = `
    <img src = ${film.poster} class = "card-img-top" alt = "${film.title}">
    <div class = "card-body">
       <h4 class = "card-title">${film.title} </h4>
       <p class = "card-text"> ${film.runtime}</p>
       <p class = "card-text">${film.showtime}</p>
       <p class = "card-text">${film.capacity}</p>
    </div>
 
    `
    console.log("work!")
    // Adding elements to tHE DOM
document.querySelector("#column-left").appendChild(card)
}

// fetching films

function fetchFilms(){
    fetch("http://localhost:3000/films")
    .then(res =>res.json())
    .then(data => {
        data.forEach(data => {
            displayFilm(data)
        });
    })
}
fetchFilms()