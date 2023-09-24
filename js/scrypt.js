// Almacena en variables los elementos del DOM necesarios
let lightPower = document.querySelector("#lightPower")
let start = document.querySelector("#start")
let screen = document.querySelector("#screen")
let image1 = '<img src="./images/gta.webp">'
let image2 = '<img src="./images/scorpion.jpeg"></img>'
let image3 = '<img src="./images/kratos.webp"></img>'
let gif = '<img src="./images/nintendoGif.gif"></img>'
let buttonA = document.querySelector("#buttonA")
let buttonB = document.querySelector("#buttonB")
// Rastrea si la consola está encendida
let power = false
// Rastrea si el video inicial está reproduciendose
let animationInProgress = false
// Almacena en un array las imágenes y crea una variable para su posición en la pantalla
let images = [image1, image2, image3]
let imgaesPosition = 0
// Crea un audio para utilizarlo al iniciar la consola
let audio = new Audio()
audio.src = "./audio/street-fighter-intro.mp3"

// Al hacer click en el botón START...
start.addEventListener("click", () => {
    // Si la consola no está encendida...
    if (!power) {
        // La enciende y aplica las clases correspondientes a la luz
        power = true
        lightPower.classList.toggle("powerOn")
        lightPower.classList.toggle("powerOff")
        // Ejecuta la animación de encendido
        screen.innerHTML = gif
        audio.play();
        animationInProgress = true
        // Luego de finalizada la animación muestra la primera imagen
        setTimeout(() => {
            screen.innerHTML = images[0];
            animationInProgress = false
        }, 4000)
    // Si la consola está encendida...
    } else if (power && !animationInProgress) {
        // La apaga y aplica las clases correspondientes a la luz
        power = false
        lightPower.classList.toggle("powerOn")
        lightPower.classList.toggle("powerOff")
        // Deja la pantalla vacía y reinicia el indicador de la posición de las imágenes
        screen.innerHTML = ""
        imgaesPosition = 0
        // Pausa el audio y lo setea en el momento 0 de su duración
        audio.pause();
        audio.currentTime = 0
    }
})

// Se encarga de avanzar en lás imágenes siempre y cuando la consola esté encendida y no se esté reproducioendo la animación de encendido
buttonA.addEventListener("click", () => {
    if (power && !animationInProgress) {
        if (imgaesPosition === 2) {
            imgaesPosition = 0
            screen.innerHTML = images[imgaesPosition];
        } else {
            imgaesPosition++
            screen.innerHTML = images[imgaesPosition];
        }
    }
})

// Se encarga de retroceder en lás imágenes siempre y cuando la consola esté encendida y no se esté reproducioendo la animación de encendido
buttonB.addEventListener("click", () => {
    if (power && !animationInProgress) {
        if (imgaesPosition === 0) {
            imgaesPosition = 2
            screen.innerHTML = images[imgaesPosition];
        } else {
            imgaesPosition--
            screen.innerHTML = images[imgaesPosition];
        }
    }
})