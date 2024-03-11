import { getTranding,getTrandingMovies,getTrandActors,cercaPersona} from "./API/trendingGetters.js"

import { baseUrl, urlSearch } from "./API/config.js";

// importo del package che mi rende disponibili le variabili d'ambiente 



// carica le variabili d'ambiente del file .env


// console.log(process.env.API_KEY); // percorso del file .env // process è un oggetto che tiene l'esecuzione di node

/**
 * Da aggiungere:
 * 1)   poster_path
 * 2)   title
 * 3)   vote_average
 * 4)   media_type
 * 5)   release_date
 */
getTranding(baseUrl)
.then((data) => { 
    data.results.forEach((element) => {
        switch(element.media_type){
            case "movie":
                let titolo=element.title;
                console.log(titolo);
            break;

            case "tv":
                let nome=element.title;
                console.log(nome);
            break;
        }
    });
});


getTrandingMovies (baseUrl);

getTrandActors(baseUrl);

cercaPersona(urlSearch);

// DOM - Document object module:  come vedere una pahina HTML in JavaScript
