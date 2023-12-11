export default class FlyingText
{
    constructor(parentNode, message)
    {
        this.parentNode = parentNode
        this.node = document.createElement("div")
        this.node.innerText = message
        this.parentNode.append(this.node)

        this.node.className = "flyingtext"
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        this.node.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
        this.x = Math.random() * 50  + 20;
        this.y = Math.random() * 50  + 20;
        this.node.style.left = this.x + "vw";
        this.node.style.top = this.y + "vh";
        this.node.onclick = () => { this.node.remove()}
        this.stopped = false;

    }

    tick()
    {
        if(Math.random() < 0.01)
        {
            this.stopped = true;
        }
        if(!this.stopped){
            this.x  += Math.random() > 0.5 ? 1 : -1;
            this.y  += Math.random() > 0.5 ? 0.5 : -0.5;
            this.node.style.left = this.x + "vw";
            this.node.style.top = this.y + "vh";
        }
        return true;
    }
}