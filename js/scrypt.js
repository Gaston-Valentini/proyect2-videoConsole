let power = false
let lightPower = document.querySelector("#lightPower")
let audio = new Audio()
audio.src = "../audio/street-fighter-intro.mp3"
let start = document.querySelector("#start")
let screen = document.querySelector("#screen")
let animationInProgress = false
let image1 = '<img src="../images/gta.webp">'
let image2 = '<img src="../images/scorpion.jpeg"></img>'
let image3 = '<img src="../images/kratos.webp"></img>'
let images = [image1, image2, image3]
let imgaesPosition = 0
let buttonA = document.querySelector("#buttonA")
let buttonB = document.querySelector("#buttonB")

start.addEventListener("click", () => {
    if (!power) {
        power = true
        lightPower.classList.toggle("powerOn")
        lightPower.classList.toggle("powerOff")
        screen.innerHTML = '<img src="https://i.gifer.com/XTrC.gif"></img>'
        audio.play();
        animationInProgress = true
        setTimeout(() => {
            screen.innerHTML = images[0];
            animationInProgress = false
        }, 4000)
    } else if (power && !animationInProgress) {
        power = false
        lightPower.classList.toggle("powerOn")
        lightPower.classList.toggle("powerOff")
        screen.innerHTML = ""
        imgaesPosition = 0
        audio.pause();
        audio.currentTime = 0
    }
})

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