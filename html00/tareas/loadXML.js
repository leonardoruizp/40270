import { myFunction } from './myFunction.js';

export function loadXMLDoc() {
    console.log("Iniciando lectura XML");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        const cd = xmlDoc.getElementsByTagName("CD");
        myFunction(cd);
    };
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
    console.log("Saliendo de lectura XML");
}
