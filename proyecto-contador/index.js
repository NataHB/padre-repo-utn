let tiempo = {
    horas:0,
    minutos:0,
    segundos:0
}

let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

horas.innerHTML = tiempo.horas
minutos.innerHTML = tiempo.minutos
segundos.innerHTML = tiempo.segundos

function sumaTiempo(){
    tiempo.segundos = tiempo.segundos + 1
    if(tiempo.segundos === 60){
        tiempo.segundos = 0
        segundos.innerHTML = tiempo.segundos
        tiempo.minutos = tiempo.minutos + 1
        minutos.innerHTML = tiempo.minutos
    }
    if(tiempo.minutos === 60){
        tiempo.minutos = 0
        minutos.innerHTML = tiempo.minutos
        tiempo.horas = tiempo.horas + 1
        horas.innerHTML = tiempo.horas
    }
    segundos.innerHTML = tiempo.segundos
}
setInterval(sumaTiempo, 1000)