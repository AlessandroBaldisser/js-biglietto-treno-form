// il cliente utilizza il form per fornire le informazioni
let kmELement = document.getElementById("km");
let ageElement = document.getElementById("age");
const buttonElement = document.getElementById("button");

buttonElement.addEventListener('click', function(){
    console.log(kmELement.value);
    console.log(ageElement.value);
})
// calcolo il totale da pagare
// mando a schermo il prezzo 