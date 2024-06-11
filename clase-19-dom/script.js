/*const caja= document.getElementById('caja')

const user = {
    username: 'pepesito',
    password: '******4',
    adress: 'av siempre viva',
    email: 'pepe@gmail.com'
}

//Generar a partir del usuario el sig html
h2 username
span password
adress input (y el valor debe ser la direccion),
input (y el valor debe ser el email)


caja.innerHTML= `
<h2>${user.username}</h2>
<span>${user.password}</span>
<input type="text" value="${user.adress}">
<input type="text" value="${user.email}">
`;
*/

//ARRAYS RENDERIZADO
/*
const products = [
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
    {
        precio: 1000,
        nombre: 'tv samsung',
        descripcion: 'lorem ipsum'
    },
   
]
const productsContainerHTML = document.getElementById('products-container')


let productsList = ''

for(const producto of products){
    
    productsList = productsList +  `
        <h1>${producto.nombre}</h1>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
        <div>
            <input value='${producto.precio}'>
            <button>comprar</button>
        </div>
    `

}

productsContainerHTML.innerHTML = productsList
*/

const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]
const historialContainer = document.getElementById('historial-container')

let historialLista = ''
for(const registro of historial){
    historialLista = historialLista + `
    <div>
    <span><b>${registro.id}</b></span>
    <h3>${registro.nombre}</h3>
    <span>Fecha: ${registro.fecha}</span>
    <br>
    <hr>
</div>
    `
}

historialContainer.innerHTML = historialLista

/* Renderizar el historial, cada elemento de historial debe seguir la sig estructura:

<div>
    <span><b>ID: #003</b></span>
    <h3>Tv samsung</h3>
    <span>Fecha: 14/05/2023</span>
    <br>
    <hr>
</div>
*/