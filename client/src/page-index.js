import {signin} from './chat-api';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        localStorage.setItem('username', document.querySelector(".username").nodeValue)
        return signin(this);
    }
});
