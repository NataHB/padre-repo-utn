// ### CALCULADORA

// Funcionalidades:

// CALCULADORA
// -tener soporte para las sig operacion: +, -
//     -'+'
//     -'-'

// HISTORIAL:
// -historial

// LOGIN:
// -crear usuario (esta se ejecuta al entrar a la caluladora)
//     -email => debe estar validado


// Utilidades:
// -validacion
// -opcion de CANCELAR

// INGRESO DE DATOS:
// -prompt

// EGRESO DE DATOS:
// -alert



// LOGIN:

// Prompt va a solicitar al usuario un email
// Validamos que el email sea un email

// RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
// En caso de que no volvera a solicitar
// En caso de que si sea valido dira email registrado

// Reglas:
// Todo el logeo debe estar dentro de una funcion

// login()


//mi forma
// function login(){
//     let emailUsuario = prompt ('Ingrese su usuario')
//     while(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailUsuario))){ // (!('numero')) = SI NO ES NUMERO ES FALSO 
//         alert ('No valido, intente otra vez')
//         emailUsuario = prompt ('Ingrese su usuario')
//     }
//     let passwordUsuario = prompt ('ingrese su password')
//     while(!(((/[A-Z]/.test(passwordUsuario)) && passwordUsuario.length > 6 && ' '))){
//         alert ('No va)lido, intente otra vez')
//         passwordUsuario = prompt ('Ingrese su password')
//     }

//     return {
//         email: emailRegistrado,
//         password: passwordUsuario
//         }
// }

// let emailRegistrado = login()

//mejor forma
// function validarEmail(email) {
//     return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
// }
// function validarPassword(password) {
//     return (password.length > 6 && !(/[A-Z]/.test(password)) && ' ')
// }
// function obtenerDatos(data) {
//     let dato = prompt(data.mensaje)
//     while (!data.validacion(dato)) {
//         dato = prompt(data.error)
//     }
//     return dato
// }

// let email = obtenerDatos(
//     {
//         mensaje:"ingrese el email",
//         validacion: validarEmail,
//         error: "error vuelva a ingresar su email"
//     }
// )

// let password = obtenerDatos(
//     {
//         mensaje:"ingrese el password",
//         validacion: validarPassword,
//         error: "error vuelva a ingresar su password"
//     }
// )

// Solicitar una operacion:
// La operacion es valida si es alguna de las operaciones validas 
// Vamos a solicitar un numero 1: 
// Validar que sea un numero
// Vamos a solcitar un numero 2:
// validar que sea un numero


// En caso de elegir una '+'
// Aca sumamos
// Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}

// En caso de elegir una '-'
// Aca restamos
// Mostrar por alerta 'el resultado de {numero1} {operacion} {numero2} es {resultado}


//CALCULADORA
// function tipoDeOperacion(){
//     let signo = prompt('ingrese + o -')
//     while ( signo != '-' && signo != '+'){
//         signo = prompt ('error: ingrese + o -')
//     }
//     return signo
// }

// function validacionNumero(){
//     let numero = prompt ('ingrese un numero')
//     while(isNaN(numero)|| numero == ' '|| numero == null){
//         numero = prompt ('error: ingrese un numero')
//     }
//     return numero
// }

// function resolucion(numero1, numero2, signo){
//     let resultado
//     if (signo == '+'){
//         resultado = parseFloat(numero1) + parseFloat(numero2)
//         return resultado
//     }
//     else if(signo == '-'){
//         resultado = parseFloat(numero1) - parseFloat(numero2)
//         return resultado
//     }
// }

// function caluladora(){
//     let signo = tipoDeOperacion()
//     let numero1 = validacionNumero()
//     let numero2 = validacionNumero()
//     let resultado = resolucion(numero1, numero2, signo)
//     alert ('el resultado es:' + ' ' + resultado)
// }

// caluladora()

const historial = [
    {
        accion: 'CALCULAR',
        operacion: signo,
        a: numero1,
        b: numero2,
        resultado: resultado
    }
]

const renderizarHistorial = historial.map (function(historial){
        return 'accion: ' + historial.accion + '\n' + 'operacion: ' + historial.operacion + '\n' + 'numeros: ' + historial.a + ', ' + historial.b + '\n' + 'resultado: ' + historial.resultado + '\n'}
)

console.log ('El historial es:' + '\n' + renderizarHistorial)

// const historial = [
//     {
//         accion: 'CALCULAR',
//         operacion: '+',
//         a: '1',
//         b: '2',
//         resultado: '3'
//     },
//     {
//         accion: 'CALCULAR',
//         operacion: '-',
//         a: 1,
//         b: 2,
//         resultado: -1 
//     }
// ]

// const renderizarHistorial = historial.map (function(historial){
//         return 'accion: ' + historial.accion + '\n' + 'operacion: ' + historial.operacion + '\n' + 'numeros: ' + historial.a + ', ' + historial.b + '\n' + 'resultado: ' + historial.resultado + '\n'}
// )

// console.log ('El historial es:' + '\n' + renderizarHistorial)

//mi primer forma NO FUNCIONA
// function validarNumero(numero){
//    return ( !(!numero || isNaN(numero)))
//}

// function validarOperacion(signo){
//    return ( signo == '+' || signo == '-' )
//}

// let operacion = prompt ('para suma ingrese + y para resta ingrese -')
// while(!validacionSigno){
//     prompt ('ERROR para suma ingrese + y para resta ingrese -')
// }

// let numero1 = prompt('dime un numero')
//     while(!validacionNumero){
//     numero1 = prompt('ERROR dime un numero')
// }

// let numero2 = prompt('dime un numero')
//     while(!validacionNumero){
//     numero2 = prompt('ERROR dime un numero')
// }

//  let resultado =0
// if (operacion === '+'){
//     resultado= numero1 + numero2
// }
// else{
//     resultado= numero1 - numero2
// }
// alert('El resultado de ' + numero1 + ' ' + operacion + ' ' + numero2 + ' es: ' + resultado)

//segunda forma mejor
// function tipoDeOperacion(){
//     let signo = prompt('ingrese + o -')
//     while ( signo != '-' && signo != '+'){
//         signo = prompt ('error: ingrese + o -')
//     }
//     return signo
// }

// function validacionNumero(){
//     let numero = prompt ('ingrese un numero')
//     while(isNaN(numero)|| numero == ' '|| numero == null){
//         numero = prompt ('error: ingrese un numero')
//     }
//     return numero
// }

// function resolucion(numero1, numero2, signo){
//     let resultado
//     if (signo == '+'){
//         resultado = parseFloat(numero1) + parseFloat(numero2)
//         return resultado
//     }
//     else if(signo == '-'){
//         resultado = parseFloat(numero1) - parseFloat(numero2)
//         return resultado
//     }
// }

// function caluladora(){
//     let signo = tipoDeOperacion()
//     let numero1 = validacionNumero()
//     let numero2 = validacionNumero()
//     let resultado = resolucion(numero1, numero2, signo)
//     alert ('el resultado es:' + ' ' + resultado)
// }

// caluladora()

// HISTORIAL:

// El historial debera tener el siguiente formato

// Crear una funcion llamada: renderizarHistorial(historial)

// La funcion debera crear un string a partir del array con el siguiente formato y retornarlo:

// '
// El historial es:

// Accion: CALCULAR
// operacion: {operacion}
// numeros: {a}, {b}
// resultado: {resultado}

// Luego mostar el string resultante por alerta

// Recuerda: puedes usar `` (template string para hacer saltos de linea) o '\n'
// Ejemplo:
// 'El historial es:\n-hola' 
// se vera como:
// El historial es
// -hola

