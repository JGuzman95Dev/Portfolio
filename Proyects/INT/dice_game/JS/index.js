// alert('working');

var randomNumber1 = Math.floor( Math.random() * 6 ) + 1; // se genera un numero aleatorio del 1 a 6

var randomImgSrc1 = "images/dice" + randomNumber1 + ".png"; // aqui seleccionamos lal variablle que va a cambiar para poder variar la direccion y asi poder cambiar la imagen

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImgSrc1); // aqui cambiamos la imagen de la etiqueta img por la que seleccionamos antes

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1); //aqui se hace exactamente lo mismo que en las dos linneas superiores pero en una linea


// para el seguundo dado//////////////////////////////////////

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1; // se genera un numero aleatorio del 1 a 6 para el segundo dado

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png"; // aqui seleccionamos lal variablle que va a cambiar para poder variar la direccion y asi poder cambiar la imagen el segundo dado

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2); // aqui cambiamos la imagen de la etiqueta img por la que seleccionamos antes



// para el resultado

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"; // si el primer dado es mayor que el segundo se muestra el mensaje de que el jugador 1 gana
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; // si el segundo dado es mayor que el primero se muestra el mensaje de que el jugador 2 gana
} else {
    document.querySelector("h1").innerHTML = "Draw!"; // si los dos dados son iguales se muestra el mensaje de que hay un empate
}
