// funzione che al caricamento della pagina verifichi che il titolo sia corretto, nel caso lo corregge

export const fixTitle = () => {
    const title = document.getElementById('header'); // prendi elemento con ID = 'header'

    const titleContent = title.innerHTML; // cosa è contenuto tra il tag di apertura e di chiusura

    if(titleContent === "MovieApp")
        return;

    else{
        title.innerHTML = "MovieApp";
    }
}

// funzione che al caricamento della pagina aggiunga un paragrafo con il titolo di un Film

export const addParagraph = () => {

    const title = document.getElementById("header");

    const paragraph = document.createElement("p"); // creare un elemento paragrafo all'interno del documento html

    paragraph.innerHTML="Indiana Jones"; // accesso al contenuto del tag

    title.appendChild(paragraph); // metodo dell'oggetto document (html) aggiunta di un nuovo tag alla pagina HTML. Applicato al titolo
    
}

