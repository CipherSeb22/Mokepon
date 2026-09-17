let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
 
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) 

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'


    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
 

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spamMascotaJugador =document.getElementById('mascota-jugador')
    
    
    if (inputHipodoge.checked) {
        spamMascotaJugador.innerHTML = 'Hipodoge'
    }  else if (inputCapipepo.checked) {
          spamMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spamMascotaJugador.innerHTML = 'Ratigueya'
    } else{
        alert('Selecciona una mascota')
    }


    seleccionarMascotaEnemigo()
          

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spamMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spamMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
       spamMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 3) {
        spamMascotaEnemigo.innerHTML = 'Ratigueya'
    }

}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2 ) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    combate()
}

function combate() {
    let spamVidasJugador = document.getElementById('vidas-jugador')
    let spamVidasEnemigo = document.getElementById('vidas-enemigo')   
    if(ataqueEnemigo == ataqueJugador) {
                    crearMensaje("EMPATE")
                } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
                    crearMensaje("Ganaste")
                    vidasEnemigo --
                    spamVidasEnemigo.innerHTML = vidasEnemigo
                } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
                    crearMensaje("Ganaste")
                     vidasEnemigo --
                    spamVidasEnemigo.innerHTML = vidasEnemigo
                 }  else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
                    crearMensaje("Ganaste")
                     vidasEnemigo --
                    spamVidasEnemigo.innerHTML = vidasEnemigo
                }  else {
                    crearMensaje("Perdiste")
                    vidasJugador --
                    spamVidasJugador.innerHTML = vidasJugador
                }

                revisarvidas()
}

function revisarvidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES! GANASTE')

    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento PERDISTE')
    }


}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' +  ataqueJugador  + ', la mascota del enemigo ataco con ' +  ataqueEnemigo  + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
   
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)