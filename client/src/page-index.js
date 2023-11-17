import {signin} from './chat-api';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
    document.querySelector(".enregistrer").onclick = () => 
    {
        window.location.href = "register.html";
    }
});
