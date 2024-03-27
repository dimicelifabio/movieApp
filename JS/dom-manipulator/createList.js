/*
    createTrandingMovieList() 
    la funzione prenderà in ingresso un'Array di Film.
    Per ogni film aggoiungerà al dom un nuovo nodo che sarà un TAG <li> contenente il titolo del Movie.
    @param Array dei Film
    @return
*/

/*
export const createTrandingMovieList = (array) => {

    const list = document.getElementById ("list");

    const list_movie = document.createElement("li");

    list_movie.innerHTML = array;

    list.appendChild(list_movie);

}

*/




export const createMovieView = (data) => {
    const movie=document.getElementById("movies");
    data.results.forEach(element=>{
        //creazione di una card
        const card=document.createElement("div");
        card.classList.add("card");


        //creazione del contenuto della card
        const textContainer=document.createElement("div");

        //creazione immagine della card
        const image=document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;

        // inserimento del titolo del film
        const title=document.createElement("h1");
        title.innerText=element.title;

        // inserimento della descrizione del film
        const description=document.createElement("p");
        description.innerText=element.overview;

        const titleMovies = document.createElement("h1");

        


        card.appendChild(image);
        movie.appendChild(card);
        /*textContainer.appendChild(title);
        textContainer.appendChild(description);
        card.appendChild(textContainer);*/
        
    })
}



export const createSerieTvView = (data) => {
    const serieTv = document.getElementById("serieTv");
    data.results.forEach(element => {

        const cardSerieTv = document.createElement("div");
        cardSerieTv.classList.add("cardSerieTv");

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${element.media_type}`;

        cardSerieTv.appendChild(image);
        serieTv.appendChild(cardSerieTv);
    })
}

export const createActorsView = (data) => {
    const actors = document.getElementById("actors");
    data.results.forEach(element => {

        const cardActors = document.createElement("div");
        cardSerieTv.classList.add("cardActors");

        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;

        cardActors.appendChild(image);
        actors.appendChild(cardActors);
    })
}

