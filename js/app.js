// il cliente utilizza il form per fornire le informazioni
let kmELement = document.getElementById("km");
let ageElement = document.getElementById("age");
const buttonElement = document.getElementById("button");
//elementi di Output
let kmOutputELement = document.getElementById("kmTotali");
let ageOutputElement = document.getElementById("etaCliente");
let  costoOutputElement = document.getElementById("costoTotale");


buttonElement.addEventListener('click', function () {  // scrivo tutto il codice dentro l'eventListener
    console.log(kmELement.value);
    console.log(ageElement.value);
    let prezzoBiglietto = kmELement.value * 0.21;

    // se l'utente ha meno di 18 anni avrà uno sconto del 20%
    if (ageElement.value < 18) {
        let sconto = prezzoBiglietto * 0.2;
        let costoTotale = prezzoBiglietto - sconto;
        console.log("il costo è " + costoTotale.toFixed(2)); /* utilizzo il metodo .toFIxed(2)
        per mandare a schermo due cifre decimali */
        //mando a schermo tutti gli output
        kmOutputELement.innerHTML = kmELement.value + " km";
        ageOutputElement.innerHTML = ageElement.value;
        costoOutputElement.innerHTML = costoTotale.toFixed(2) + " euro";
    }
    // se l'utente ha più di 65 anni avrà uno sconto del 40%
    else if (ageElement >= 65) {
        let sconto = prezzoBiglietto * 0.4; // calcolo lo sconto del 40%
        let costoTotale = prezzoBiglietto - sconto;
        console.log("il costo è " + costoTotale.toFixed(2));
        // mando a schermo tutti glio output
        kmOutputELement.innerHTML = kmELement.value + " km";
        ageOutputElement.innerHTML = ageElement.value;
        costoOutputElement.innerHTML = costoTotale.toFixed(2) + " euro";

    } else{ // se non viene applicato nessuno sconto mando a schermo il prezzo 
        console.log("il costo è " + prezzoBiglietto.toFixed(2));
        // mando a schermo tutti gli output
        kmOutputELement.innerHTML = kmELement.value + " km";
        ageOutputElement.innerHTML = ageElement.value;
        costoOutputElement.innerHTML = prezzoBiglietto.toFixed(2) + " euro";
    }
    // mando a schermo il prezzo 

    // svuoto l'input dell'utente 
    kmELement.value = ""; // assegno ai due input valori nulli
    ageElement.value = "";
})

// calcolo il totale da pagare

//console.log(prezzoBiglietto);
