import { Picture } from './picture.js';

console.log("Imprime mensaje a la consola")

const x = document.getElementById("app")
console.log(x)

//cuidar que Picture ya esté inicializada
x.innerHTML = Picture(1) + Picture(2) + Picture(3)