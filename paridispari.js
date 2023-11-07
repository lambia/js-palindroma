//input: ricevo la scelta pari/dispari dall'utente
const puntata = prompt("Scegli tra pari e dispari");

//input: ricevo il numero scelto dall'utente
const numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5"));

//input: estraggo il numero casuale per il computer
const numeroComputer = getRndInteger(1, 5);

//elaborazione: sommo i numeri
const somma = numeroUtente + numeroComputer;

//elaborazione: controllo che la somma sia pari
const risultatoPariOrDispari = pariOrDispari(somma);

console.log("Somma totale: ", somma);
console.log("Risultato: ", risultatoPariOrDispari);

//elaborazione: controllo che l'utente abbia vinto
//output: informo l'utente
if(puntata.toLowerCase() == risultatoPariOrDispari) {
    alert("Vince Utente");
} else {
    alert("Vince Computer");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariOrDispari(numero) {
    let risultato = "dispari";

    if(numero % 2 == 0) {
        risultato = "pari";
    }

    return risultato;
}

// function pariOrDispari(numero) {

//     if(numero % 2 == 0) {
//         return "pari";
//     }
    
//     return "dispari";
// }