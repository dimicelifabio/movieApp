// Noi abbiamo bisogno di analizzare dei dati all'interno di un database non nostro, ma che ha creato qualcuno (API)

import { baseUrl } from "./config.js";
import { urlSearch } from "./config.js";

const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

import { options } from "./config.js";

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

/**
 * creare una funzione che in base a quello che si scrive sulla ricerca escono le informazioni inerenti al soggetto
 */

export const cercaPersona = async (urlSearch) => {

    const response = await fetch (urlSearch,options);

    const data = await response.json();

    return data;

}






