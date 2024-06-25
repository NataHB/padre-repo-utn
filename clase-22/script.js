/* 
Si fetchean a esta direccion: https://jsonplaceholder.typicode.com/users/1
Obtendran el detalle de un usuario
El usuario tendra este formato
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

Mostrar en HTML dentro de un div

h2: {user.name}
span: phone: {user.phone}
span: email: {user.email}
*/

// const URL_API = 'https://jsonplaceholder.typicode.com'
// const obtenerUsuarios = async (id) => {

//     const response = await fetch(URL_API + '/users/' +id, {
//         method: 'GET',
//     })

//     const data = await response.json()
//     console.log(data)
//     const divHTML = document.getElementById("div")
//     divHTML.innerHTML=`
//     <h1> ${data.name} </h1>
//     <span> phone: ${data.phone} </span>
//     <span> email: ${data.email} </span>
//     `
// }

// obtenerUsuarios(2)

// hace una funcion que de acuerdo al parametro se ejecute una funcion u orientation, las funciones que se van a ejecutar como callbacks van a estar en un objeto


//MASTERCLASS//

const sumar = ([num1, num2]) => num1 + num2
const escribir = (texto) => 'la palabra es ' + texto

const VALORES = {
  funcionSumar: sumar,
  funcionEscribir: escribir
}

//ASI TAMBIEN SE PUEDE

const funcionConParametros = (funcion, datos) =>{       // const funcionConParametros = (funcion, datos) =>{
  console.log(funcion(datos))                           //   console.log(VALORES[funcion](datos))
}                                                       // }

funcionConParametros(VALORES.funcionSumar, [4,2])       // funcionConParametros('funcionSumar', [4,2])
funcionConParametros(VALORES.funcionEscribir, 'holi')   // funcionConParametros('funcionEscribir', 'holi')



const historial = {
  pepita:
    {
      id: '001',
      'nombre apellido': 'tv samsung',
      fecha: '17/09/2020'
  },
  pepito:
    {
      id: '001',
      'nombre apellido': 'tv samsung',
      fecha: '17/09/2020'
  }
}


const obtenerInfo= (objeto) =>{
    let info = objeto.id
    return info
}     

console.log(obtenerInfo(historial.pepita))


// console.log(historial['nombre apellido']);
// console.log(historial.id);

// console.log(historial[0].id)

// for(let historia of historial){
//   alert(historia.id)
// }