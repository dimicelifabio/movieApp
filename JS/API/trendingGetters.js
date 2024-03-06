// Noi abbiamo bisogno di analizzare dei dati all'interno di un database non nostro, ma che ha creato qualcuno (API)

import { baseUrl } from "./config.js";

const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";


const options = {  // opzioni che si danno come parametro alla funzione fetch
    method: "GET", // metodo di chiamata. di default ti mette la GET
    headers: {  // informazioni aggiuntive quando si va a fare una chiamata, personalizza la chiamata
        "Content-Type": "application/json", // come ci aspettiamo che i dati ci vengano forniti
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTg2ZGEwNzI2NmU4MDc3MzAwZmQ5NDQwZmY5MGM1NyIsInN1YiI6IjY1ZTg2YzBiYzE1Zjg5MDE2MzE2NDdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ADnFPHrNt_7mQv8nV66tjX784HjAalL5xv9qsvxWCE"
    } // Bearer è un tipo di autorizzazione, tipo di chiamata di login.

}

export const getTranding = async (baseUrl) => {    // creazione della nostra funzione

    const response = await fetch(baseUrl + "all/day?language=en-US", options); // è una funzione asincrona e aspetta che venga eseguita la fetch (scambio di nformazioni tra noi e il database)

    const data = await response.json();  // estrarre l'oggeto di dato effettivo (asincrona "await")

    return data;
}



/* getTrandingMovies

    @param baseUrl

    @returns film di tendenza (dati del database)
*/

export const getTrandingMovies = async (baseUrl) => {

    const response = await fetch(baseUrl + "movie/day?language=en-US", options);

    const data = await response.json();

    return data;
}

// Migliori attori 

export const getTrandActors = async(baseUrl) => {

    const response = await fetch (baseUrl + "person/day?language=en-US", options);

    const data = await response.json();

    return data;
}





