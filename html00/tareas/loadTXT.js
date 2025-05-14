import { imprime } from './imprime.js';

export function loadTXTDoc() {
    console.log("Iniciando lectura TXT");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const text = xhttp.responseText;
        imprime(text);
    };
    xhttp.open("GET", "personas.txt");
    xhttp.send();
    console.log("Saliendo de lectura TXT");
}