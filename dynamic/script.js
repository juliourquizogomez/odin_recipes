
// EJEMPLO BOTON

let respuesta = "Que tal?"

const boton = document.querySelector("#botonHola");

function resp() {
    alert(respuesta);
}

boton.addEventListener("click", resp);


// EJEMPLO COMPUTED PROPERTIES

/*
let fruit = prompt("Which fruit to buy?", "manzana");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.mandarina); // 5 if fruit="apple"
*/


// OBJETOS

const miObjeto = {
    name: 'Juan Arpeitia',
    age: 30,
}

const botonJuan = document.querySelector(".juan");


function persona(nombre, edad){
    return{
    name: nombre,
    age: edad,
    }
}

function juanArpeitia(){
    //alert(miObjeto.name)
    alert(juan.name)
}


juan = persona("Juan Arpeitia", 30)

//let personaDefinida = persona("Juan Arpeitia", 30)

//botonJuan.addEventListener("click", juanArpeitia)


// FACTORY FUNCTION

const medico = function(name, age) {
    this.sayHello = () => alert(this.age);
    this.name = name;
    this.age = age;
  };
  
const juanfran = new medico('JuanFran', 27);

botonJuan.addEventListener("click", juanfran.sayHello)



let a = 17;

const func = x => {
  let a = x;
};

func(99);

console.log(a);


const FactoryFunction = string => {
    const capitalizeString = () => console.log(string.toUpperCase());
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { capitalizeString };
};
  
const taco = FactoryFunction('taco');


taco.capitalizeString();