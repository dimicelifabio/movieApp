const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US"; // url API



const options = {  // opzioni che si danno come parametro alla funzione fetch
    method: "GET", // metodo di chiamata
    headers: {  // informazioni aggiuntive quando si va a fare una chiamata 
        "Content-Type": "application/json", // come ci aspettiamo che i dati ci vengano forniti
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTg2ZGEwNzI2NmU4MDc3MzAwZmQ5NDQwZmY5MGM1NyIsInN1YiI6IjY1ZTg2YzBiYzE1Zjg5MDE2MzE2NDdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ADnFPHrNt_7mQv8nV66tjX784HjAalL5xv9qsvxWCE"
    } // Bearer è un tipo di autorizzazione, tipo di chiamata di login.

}

const getTranding = async () => {
    const response = await fetch(url, options);

    const data = await response.json();  // estrarre l'oggeto 

    return data;
}

getTranding();



