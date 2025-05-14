// ejemplo de función anónima de tipo arrow
import { muestra } from "./muestra.js"
import { boton } from "./boton.js"
// boton.addEventListener("click", muestra)
boton.addEventListener("click", 
    () =>{
    let user= document.getElementById("user")
    let password= document.getElementById("password")

    console.log(user.value)
    console.log(password.value)

    user.setAttribute("name", "q")
    user.setAttribute("password", "yyy")

    let formulario = document.getElementsByTagName("form")
    formulario[0].setAttribute("action","https://www.google.com/search")
    console.log(formulario[0])
    formulario[0].submit()
    }
)

