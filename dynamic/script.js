let name = "Julio"
const number = 12

const boton = document.querySelector("button");

//alert(name, number)

function numero() {
    alert(number);
}

boton.addEventListener("click", numero);