//input: recupero una parola dall'utente
const parola = prompt("Inserisci una parola");

//rigiro la parola al contrario
let parolaInvertita = giraParola(parola);

//controllo che la parola si uguale al suo contrario e setto risultato
let isPalindromo = false;

if(parola == parolaInvertita) {
    isPalindromo = true;
}

//output: avviso l'utente
if(isPalindromo) {
    alert("La parola è palindroma");
} else {
    alert("La parola NON è palindroma");
}

function giraParola(x) {
    let risultato = "";

    for (let i = x.length-1; i >= 0; i--) {
        risultato += x[i];
    }

    return risultato;
}