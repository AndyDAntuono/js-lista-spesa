
/* [RIFERIMENTO]
// HO UNA LISTA DELLA SPESA, DEVO MOSTRALA A VIDEO
const ingredienti = ["Guanciale", "Peperoni", "Pasta", "Olive", "Controfiletto", "Quaglie", "Pollo", "Pomodori", "Melanzane"];

// RECUPERO L'ELEMENTO CHE DEVE CONTENERE LA MIA LISTA DELLA SPESA
const lista_spesa = document.getElementById("lista_spesa")
console.log(lista_spesa)

// CICLO L'ARRAY
for (let i = 0; i < ingredienti.length; i++) {
    //CREO UN NUOVO LIST ITEM
    const li = document.createElement("li");

    //GLI METTO IL TESTO ALL'INTERNO
    li.innerText = ingredienti[i];

    // APPENDO IL TEST ITEM ALL'INTERNO DELLA LISTA DELLA SPESA
    lista_spesa.append(li)
}
*/

// HO UNA LISTA DELLA SPESA, DEVO MOSTRALA A VIDEO
const ingredienti = ["Guanciale", "Peperoni", "Pasta", "Olive", "Controfiletto", "Quaglie", "Pollo", "Pomodori", "Melanzane"];

// RECUPERO L'ELEMENTO CHE DEVE CONTENERE LA MIA LISTA DELLA SPESA
const lista_spesa = document.getElementById("lista_spesa")
console.log(lista_spesa)

// CICLO L'ARRAY
let i = 0;

while (i < ingredienti.length) {
    console.log(ingredienti[i]);
    i++

    // CREO UN NUOVO LIST ITEM
    const li = document.createElement("li");

    // GLI METTO IL TESTO ALL'INTERNO
    li.innerText = ingredienti[i];

    // APPENDO IL LIST ITEM ALL'INTERNO DELLA LISTA DELLA SPESA
    lista_spesa.append(li);

}
