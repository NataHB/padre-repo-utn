//LOGIN
function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (password.length > 6 && !(/[A-Z]/.test(password)) && Boolean(password))
}
function obtenerDatos(data) {
    let dato = prompt(data.mensaje)
    while (!data.validacion(dato)) {
       dato = prompt(data.error)
    }
    return dato
}
//reproduciondo la function obtenerDatos
let email = obtenerDatos(
    {
        mensaje:"ingrese el email",
        validacion: validarEmail,
        error: "error vuelva a ingresar su email"
    }
)

let password = obtenerDatos(
    {
        mensaje:"ingrese el password",
         validacion: validarPassword,
         error: "error vuelva a ingresar su password"
     }
 )

//CALCULADORA

function validacionSigno(signo){
    return signo == '-' || signo == '+'
}

function validacionNumero(numero){
    return !isNaN(numero) && numero != ' '&& numero != null
}

function resolucion(numero1, numero2, signo){
    let resultado
    if (signo == '+'){
        resultado = parseFloat(numero1) + parseFloat(numero2)
        return resultado
    }
    else if(signo == '-'){
        resultado = parseFloat(numero1) - parseFloat(numero2)
        return resultado
    }
}

function obtenerResultados(data){
    let dato = prompt (data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt (data.error)
    }
    return dato
}

let signo = obtenerResultados(
    {
    mensaje:'ingrese + o -',
    validacion: validacionSigno,
    error:'error: ingrese + o -'
})

let numero1 = obtenerResultados(
    {
    mensaje:'ingrese un numero',
    validacion: validacionNumero,
    error:'error: ingrese un numero'
})

let numero2 = obtenerResultados(
    {
    mensaje:'ingrese un numero',
    validacion: validacionNumero,
    error:'error: ingrese un numero'
})

let resultado = resolucion(numero1, numero2, signo)

alert ('el resultado de: ' + numero1 + signo + numero2 + ' es ' + resultado)

//HISTORIAL


//PRACTICAR
const elementoHistorial = {
    accion: 'CALCULAR',
    operacion: signo,
    a: numero1,
    b: numero2,
    resultado: resultado
}


function renderizarHistorial (historialRecibido){
let listaHistorial = ''
for (const item of historialRecibido){
    listaHistorial = listaHistorial + `
    Accion: ${item.accion}
    Operacion: ${item.operacion}
    Numeros: ${item.a}, ${item.b}
    Resultado: ${item.resultado}
    `    
}
return listaHistorial
}

//En la funcion de agregar al historial vamos a hacer el push que veniamos haciendo pero ademas vamos a guardar el historial en el localStorage con la key 'historial'
function agregarHistorial (elementoHistorial) {
    const historial = obtenerHistorial()
    historial.push(elementoHistorial)
    localStorage.setItem('historial', JSON.stringify(historial))
    }

//La funcion obtener historial debe tomar el historial del localStorage y retornalo como ARRAY 
function obtenerHistorial(){
    const historialString = localStorage.getItem('historial')
    return JSON.parse(historialString)
    }

//verificacion de si hay historial guardado
    if(obtenerHistorial() === null){
    localStorage.setItem('historial', JSON.stringify([]))
    }

agregarHistorial(elementoHistorial)

console.log(renderizarHistorial(obtenerHistorial()))