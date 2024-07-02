Descrizione: Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

/*ESERCIZIO VISTO INSIEME*/

// HO UNA LISTA DELLA SPESA, DEVO MOSTRALA A VIDEO
const ingredienti = ["Guanciale", "Peperoni", "Pasta", "Olive", "Controfiletto", "Quaglie", "Pollo", "Pomodori", "Melanzane"];

// RECUPERO L'ELEMENTO CHE DEVE CONTENERE LA MIA LISTA DELLA SPESA
const lista_spesa = document.getElementById("lista_spesa")

// CICLO L'ARRAY
for (let i = 0; i < ingredienti.length; i++) {
    //CREO UN NUOVO LIST ITEM
    const li = document.createElement("li");

    //GLI METTO IL TESTO ALL'INTERNO
    li.innerTEXT = ingredienti[i];

    // APPENDO IL TEST ITEM ALL'INTERNO DELLA LISTA DELLA SPESA
    lista_spesa.append(li)
}

Consigli: Come posso ciclare su un array con il ciclo while?

