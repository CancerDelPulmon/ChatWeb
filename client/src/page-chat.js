import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import Room from './Room';
import { goLeft, goRight, goForward, goBack} from './Room';
import { rooms } from './Room';
// chat events
window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();

    // music button
    document.querySelector("#play-button").onclick = () =>  {togglePlay()};
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    console.log(fromUser, message, isPrivate);

    let node = document.createElement("div");
    node.innerText = fromUser + ": " + message;
    let parentNode = document.querySelector("#vue-container"); 
    parentNode.append(node);
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    let node = document.querySelector(".members")
    let staff = members[0]
    for (let i = 1; i < members.length; i++) {
        staff += ", " + members[i]
    }
    node.innerHTML = staff
}

// music play
function togglePlay() {
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        document.getElementById('play-button').innerText = 'Pause';
    } else {
        backgroundMusic.pause();
        document.getElementById('play-button').innerText = 'Play';
    }
}

// game


window.addEventListener("load", () => {
    setTimeout(function() {
        goForward();
    }, 2000);
})