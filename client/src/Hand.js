export default class Hand{

    constructor()
    {
        this.parent = document.querySelector(".game")
        this.node = document.createElement("div")
        this.node.className = "hand"
        this.parent.append(this.node)
        this.initialX = 55
        this.initialY = 80
        this.x = this.initialX
        this.y = this.initialY
        this.goalX = 15;
        this.goalY = 55;

        this.node.style.backgroundImage = "url('img/steal/open-hand.png')"
        this.node.style.left = `${this.x}vw`;
        this.node.style.top = `${this.y}vh`;

    }

    tick()
    {

    }
}