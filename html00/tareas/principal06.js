import { Picture } from "./picture06.js";

const p = document.getElementById("app")
p.innerHTML = Picture(1) + Picture(2) + Picture(3)

const mensaje = (id) => {alert ('holaaa' + id)}

const lista = app.querySelectorAll('img')
console.log (lista)
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
    lista[i].addEventListener("click", 
        () => {
            lista[i].classList.toggle("redonda")
        }
    )
}