export function imprime(array) {
    let table = "<tr><th>Persona</th></tr>";
    let persona = "<tr><td>";
    for (let index = 0; index < array.length; index++) {
        if (index === 0) {
            persona = "<tr><td>";
        }
        if (array[index] === "\n") {
            persona += "</td></tr>";
            table += persona;
            persona = "<tr><td>";
        } else {
            persona += array[index];
        }
    }
    document.getElementById("demo").innerHTML = table;
}