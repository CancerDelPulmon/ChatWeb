import {register} from './chat-api';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }
})
document.addEventListener("keydown", playTypingSound);
document.addEventListener("click", randomBall);

function playTypingSound(event) {
    // Check if the pressed key is a letter or number
    if (event.key.length === 1 && /^[a-zA-Z0-9]+$/.test(event.key)) {
        // You can replace "path/to/typing-sound.mp3" with the actual path to your sound file
        let typingSound = new Audio("music/type.mp3");
        typingSound.play();
    }
}

function randomBall(event)
{
    console.log("ball")
    let node = document.createElement("div")
    let red = Math.random() >= 0.5 ? 0 : 255 ;
    let green = Math.random() >= 0.5 ? 0 : 255 ;
    let blue = Math.random() >= 0.5 ? 0 : 255 ;
    node.className = "ball";
    console.log("rgb(" + red +", " + green + ", " + blue + ")" + " " + event.clientX + " " + event.clientY)
    node.style.backgroundColor = "rgb(" + red +", " + green + ", " + blue + ")";
    node.style.left = (event.clientX - 50)+ "px";
    node.style.top = (event.clientY -50) + "px";
    document.body.append(node)
}