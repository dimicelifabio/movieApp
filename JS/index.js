import { getTranding,getTrandingMovies,getTrandActors,cercaPersona} from "./API/trendingGetters.js"

import { baseUrl, urlSearch } from "./API/config.js";

getTranding(baseUrl); 

getTrandingMovies (baseUrl);

getTrandActors(baseUrl);

cercaPersona(urlSearch);

