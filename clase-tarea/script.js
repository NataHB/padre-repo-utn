// Solicitar al usuario la cantidad de personas en la clase (numero)
// Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
// (
//     Si la cantidad de personas de clase es 5, van solicitar 5 nombre
// )
// Luego de solicitar los nombres mostrarlos en este formato:
// '
// Lista de alumnos:
// -juan
// -pepe
// -maria
// -carla
// -julieta

// let cantidadAlumnnos = prompt("ingrese el numero de alumnos")
//     while(!cantidadAlumnnos || isNaN(cantidadAlumnnos)){
//         cantidadAlumnnos = prompt('Error: vuelve a ingresar el numero')
// }

// let nombres
// for (i=1;i<= cantidadAlumnnos;i++){
//     nombres= prompt("ingrese el nombre")
// }

// function lista(){
//     return "\n-"+ nombres
// }

// alert("lista:"+ lista)
// TAREAS: 1.
// Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
// Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
// Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
// Si no posee ninguno decir "no has ingresado una url valida"

// let textoUsuario = prompt("ingrese un url")

// function verificarUrl() {
// if (textoUsuario.includes("https://"){
//     console.log("la url ingresada, cuenta con certificado ssl")
// }
// else if (textoUsuario.includes ("http://"){
//     console.log("la url ingresada no cuenta con certificado ssl")
// }
// else{
//     console.log("no es una url valida")
// }
// }

// verificarUrl(textoUsuario)

// 2.
// Dado los siguientes texto
// "hola%20como%20estas,%20todo%bien?"
// "no%20me%20siento%20bien"
// "que%20mal"
// descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
// Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
// "el mensaje es corto" entre 1 y 8 caracteres
// "el mensaje es mediano" entre 9 y 18
// "el mensaje es largo"  mas de 18
// Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
// "el mensaje no es complejo"

// 3.
// solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
// con el algoritmo anterior.

// 4.
// Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
// una maysucula, sino decir "tiene minuscula"
// 

// let palabraUsuario = prompt("ingresa una palabra")

// function tieneMayuscula(palabra){
//     for(let i=0; i <palabra.length;i++){
//         if (palabra[i] >= "A" && palabra[i] <= "Z"){
//             return true
//     }
//     else{
//         return false
//     }
//     }
// }

// if (tieneMayuscula(palabraUsuario))
//     {
//     console.log("tiene mayus")
// }
// else { 
//     console.log ("tiene minus")
// }

// 28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
// Ingresá la distancia del recorrido
// Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
// Las velocidades de los medio de transporte son:
// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs
// 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
// datos con los cuales deben ser enviados a la función
// puedeVerPelicula(12, false)
// false
//  puedeVerPelicula(12, true)
// true
//  puedeVerPelicula(16, false)
// true
//  puedeVerPelicula(18, true)
// true

// function puedeVerPelicula (edad, booleano){
//     if (edad < 15 && booleano){
//         return true
//     }
//     else if (edad < 15 && !booleano){
//         return false
//     }
//     else{
//         return true
//     }
// }


// alert (puedeVerPelicula (13, true))


const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]

/* 
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'
Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'
*/


// FOR
for(let i=0; i < personajes.length; i ++){
    const personaje= personajes[i]
    console.log ("Hola mi nombre es"+ personaje.nombre + personaje.apellido + "y tengo"+personaje.edad+ "años")
}

// FOR OF
let sumatoria= 0
for(const personaje of personajes){
    console.log ("Hola mi nombre es"+ personaje.nombre + personaje.apellido + "y tengo"+personaje.edad+ "años")
    sumatoria=sumatoria+personaje.edad
}
console.log("el resultado es:"+ sumatoria)


// 30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
// datos con los cuales deben ser enviados a la función:
// esVocal('a')
// true
//  esVocal('n')
// false
//  esVocal('e')
// true


const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
]

const filtroPrecio = productos.filter(function(producto){
    return (producto.precio < 2950)
}
)
const filtroMarca = productos.filter(function(producto){
    return (producto.marca.toLowerCase() === "noblex".toLowerCase())
}
)
const filtroNombre = productos.filter(function(producto){
    return (producto.nombre.toLowerCase().includes("tv".toLowerCase))
}
)

/* 
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

