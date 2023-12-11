
export default class Hand{

    constructor(goalX,goalY)
    {
        this.parent = document.querySelector(".game")
        this.node = document.createElement("div")
        this.node.className = "hand"
        this.parent.append(this.node)
        this.initialX = 55
        this.initialY = 80
        this.x = this.initialX
        this.y = this.initialY
        this.goalX = goalX;
        this.goalY = goalY;

        this.node.style.backgroundImage = "url('img/steal/open-hand.png')"
        this.node.style.left = `${this.x}vw`;
        this.node.style.top = `${this.y}vh`;
        this.speed = 0.1;
        this.angle = calcAngle(this.goalX,this.goalY,this.x,this.y)
        this.switched = false;
    }

    tick()

    {   let directionX = this.goalX - this.x;
        let directionY = this.goalY - this.y;
        
        
        let distance = Math.sqrt(directionX ** 2 + directionY ** 2);
        
        if (distance >= this.speed) {
            directionX /= distance;
            directionY /= distance;
        }
        if (!( Math.abs(directionX) < this.speed || Math.abs(directionY) < this.speed))
        {
            this.x += directionX * this.speed;
            this.y += directionY * this.speed;

        }
        else{
            if(!this.switched){
            this.goalX = this.initialX;
            this.goalY = this.initialY;
            this.speed *= 4;
            this.node.style.backgroundImage = "url('img/steal/closed-hand.png')"
            this.node.style.transform = "rotate(" + (-this.angle) + "deg)";
            this.switched = true;
            }
            else
            {   
                
                // when hand comes back
                this.node.remove()
                return false;
            }
        }
        
        
        this.node.style.left = `${this.x}vw`;
        this.node.style.top = `${this.y}vh`;
        return true;
    }
}

const calcAngle = (x1, y1, x2, y2)  => {
        let dx = x2 - x1;
        let dy = y2 - y1;
        let angle = Math.atan2(dy, dx);
        return angle;
    }
