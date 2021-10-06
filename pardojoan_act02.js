'use strict';

window.onload = actualitzaHora();

function actualitzaHora() {
    // alert("Mostrar hora!");
    let rellotge = document.getElementById("rellotge");
    let elementAAmagar = document.getElementById("missatge");
    let data = new Date();
    let hora = data.getHours();
    // hora = prompt("Entra una hora:");
    let minuts = data.getMinutes();
    let segons = data.getSeconds();

    // Opció A (18 línies)
    // let horaText;
    // let minutsText;
    // let segonsText;
    // if (hora < 10) {
    //     horaText = "0" + hora;
    // } else {
    //     horaText = hora;
    // }
    // if (minuts < 10) {
    //     minutsText = "0" + minuts;
    // } else {
    //     minutsText = minuts;
    // }
    // if (segons < 10) {
    //     segonsText = "0" + segons;
    // } else {
    //     segonsText = segons;
    // }

    // Opció B (7 línies)
    // let horaText;
    // let minutsText;
    // let segonsText;
    // horaText = (hora < 10) ? "0" + hora : hora;
    // minutsText = (minuts < 10) ? "0" + minuts : minuts;
    // segonsText = (segons < 10) ? "0" + segons : segons;
    // rellotge.innerHTML = horaText + ":" + minutsText + ":" + segonsText;
    
    // Opció C (1 línia)
    rellotge.innerHTML = ((hora<10) ? "0" + hora: hora) + ":"
        + ((minuts<10) ? "0" + minuts: minuts) + ":"
        + ((segons<10) ? "0" + segons: segons);
  
    let missatge;
    if ((hora >= 7) && (hora < 14)) { // hora >= 7 I hora < 14
        missatge = "Bon dia!";
    } else if ((hora>=14) && (hora<18)){ //hora >= 14 I hora < 18     Bon tarda!
        missatge = "Bon tarda!"; 
    } else if ((hora>=18) && (hora<20)) {//hora >= 18 I hora < 20     Bon vespre!
        missatge = "Bon vespre!"; 
    } else {
        missatge = "Bona nit!"; 
    }
    elementAAmagar.innerHTML = missatge;
}

function amagaMostraInfo() {
    let elementAAmagar = document.getElementById("missatge");
    let amaga_mostra = document.getElementById("amaga_mostra");
    if (amaga_mostra.innerHTML == "Amagar"){
        elementAAmagar.classList.remove("visible");
        elementAAmagar.classList.add("invisible");
        amaga_mostra.innerHTML = "Mostra";
    } else if (amaga_mostra.innerHTML == "Mostra"){
        elementAAmagar.classList.remove("invisible");
        elementAAmagar.classList.add("visible");
        amaga_mostra.innerHTML = "Amagar";
    }
}

