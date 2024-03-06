import { getTranding,getTrandingMovies,getTrandActors} from "./API/trendingGetters.js"

import { baseUrl } from "./API/config.js";

getTranding(baseUrl); 

getTrandingMovies (baseUrl);

getTrandActors(baseUrl);


