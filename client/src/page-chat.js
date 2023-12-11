import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import Room, { updateRoom } from './Room';
import { goLeft, goRight, goForward, goBack} from './Room';
import { rooms,currentRoom, roomHistory } from './Room';

import Hand from './Hand';
// chat events
window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();

    let userNode = document.querySelector(".user")
    userNode.innerText += " " + localStorage.getItem('username')

    userNode.addEventListener("click", function() {
        scrambleUser();
    });
    
})

const scrambleUser = () =>
{
    let userNode = document.querySelector(".user")
    let text = userNode.innerText;
    let reversedText = text.split('').reverse().join('');
    userNode.innerText = reversedText;
}
// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    console.log(fromUser, message, isPrivate);

    let node = document.createElement("div");
    node.innerText = fromUser + ": " + message;
    let parentNode = document.querySelector("#vue-container"); 
    parentNode.append(node);
    if(message == "scramble")
    {
        scrambleUser()
    }
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
    if (backgroundMusic.paused) {backgroundMusic.play();} 
    else { backgroundMusic.pause();}
}

// game

// inital setup
window.addEventListener("load", () => {
    updateRoom();
    let arrowUp = document.querySelector(".forward");
    let arrowLeft = document.querySelector(".left");
    let arrowRight = document.querySelector(".right");

    arrowUp.addEventListener('click', function(event) {
        goForward();
    });
    
    arrowRight.addEventListener('click', function(event) {
        goRight();
    });

    arrowLeft.addEventListener('click', function(event) {
        goLeft();
    });
    
    let epic = new Hand();
})

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
            goLeft();
            break;
        case 'ArrowRight':
            goRight();
            break;
        case 'ArrowUp':
            goForward();
            break;
        case 'ArrowDown':
            goBack();
            break;
        case ' ':
            togglePlay();
            break;
    }
});

