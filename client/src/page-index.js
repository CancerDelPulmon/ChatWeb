import FlyingText from './FlyingText';
import {signin} from './chat-api';
let sprites = []
window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        localStorage.setItem('username', document.querySelector(".username").nodeValue)
        return signin(this);
    }

    let parentNode = document.querySelector(".forgot")

    parentNode.addEventListener('click', () => 
    {
        sprites.push(new FlyingText(document.querySelector("body"),"Too bad"))
    })
    animate();
});


const animate = () =>
{
    sprites.forEach((sprite, index) => { 
        if (!sprite.tick()) {
            // Remove the sprite from the array
            sprites.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}