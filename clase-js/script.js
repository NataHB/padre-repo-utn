// Crea una variable llamada "tieneHijos" y asígnale "true" si tienes hijos o "false" si no los tienes. A continuación, escribe una línea de código para mostrar el valor de la variable en una alerta.

// let tieneHijos = true;
// alert(tieneHijos)


// // Crea una variable llamada "salario" y  solicita un salario actual como valor. A continuación, escribe una línea de código que calcule el salario anual multiplicando el salario mensual por 12 y muestre el resultado en una alerta.

// let salario = propmt("salario actual")
// alert(salario*12)


// // Escribe un condicional que verifique si una variable llamada "edad" es mayor o igual a 18. Si es mayor o igual a 18, imprime "Eres mayor de edad" en la consola. Si no es mayor de edad, imprime "Eres menor de edad" en una alerta.

// let edad = propmt("Ingrese su edad")
// if (edad >=18){
//     console.log("Eres mayor de edad")
// }
// else{
//     alert("Eres menor de edad")
// }


// De un empleado se sabe su sueldo y los años de antigüedad. el sector de contabilidad nos pide hacer un programa que lea los datos y nos muestre.
// 1)  Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
// 2)  Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
// 3)  Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.

// let sueldo = prompt("Ingrese su sueldo")
// let añosAntiguedad = prompt("Ingrese sus años de antigüedad")

// if (sueldo < 500 && añosAntiguedad >= 10){
//     alert(sueldo+sueldo*20/100)
// }
// else if (sueldo < 500 && añosAntiguedad < 10){
//     alert(sueldo+sueldo*5/100)
// }
// else if (sueldo >= 500){
//     alert(sueldo)
// }

// Corrección
// let sueldo = 450
// let añosAntiguedad = 12

// if (sueldo < 500 && añosAntiguedad >= 10){
//     alert(sueldo*1.2)
// }
// else if (sueldo < 500 && añosAntiguedad < 10){
//     alert(sueldo*1.05)
// }
// else if (sueldo >= 500){
//     alert(sueldo)
// }

Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
(Si la cantidad de personas de clase es 5, van solicitar 5 nombre)
Luego de solicitar los nombres mostrarlos en este formato:
'
Lista de alumnos
-juan
-pepe
-maria
-carla
-julieta

