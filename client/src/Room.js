export default class Room {
    constructor(description, left, right, forward, backgroundImage) {
        this.description = description;
        this.left = left;
        this.right = right;
        this.forward = forward;
        this.backgroundImage = backgroundImage;
    }
}
// Room dictionary

export const rooms = {
    entrance: new Room("Welcome to Home Depot!", null, null, "toolsSection", "img/entrance.jpg"),
    paintSection: new Room("Paint section. Explore the color palette!", null, "lumber", "gardeningSection", "img/paint.jpg"),
    lumber: new Room("Lumber section. Choose your type of wood!", "entrance", "plumbingSection", null, "img/lumber.jpg"),
    plumbingSection: new Room("Plumbing section.", "toolsSection","entrance", "register", "img/plumbing.jpg"),
    gardeningSection: new Room("Welcome to the gardening section", null, "lumber", "plumbingSection", "img/gardening.jpg"),
    toolsSection: new Room("Tools section. Find the right tools!", "paintSection","gardeningSection", null, "img/tools.jpg"),
    register: new Room("You're at the register.You Won!", null, null, null, "img/register.jpg")
};

export let currentRoom = rooms.entrance;
export let roomHistory = [];


// Function to update room description and background image
function updateRoom() {
    //register music
    const backgroundMusic = document.querySelector('#background-music');
    if(currentRoom == rooms.register)   {backgroundMusic.play();}
    else {backgroundMusic.pause()}
    //description
    document.querySelector(".room-description").innerText = currentRoom.description;
    let node = document.querySelector(".game");
    node.style.backgroundImage = `url(${currentRoom.backgroundImage})`;
    //arrows
    let arrowUp = document.querySelector(".forward");
    let arrowLeft = document.querySelector(".left");
    let arrowRight = document.querySelector(".right");
    //showing arrows
    if(currentRoom.forward) {arrowUp.style.display = "block";}
    else{arrowUp.style.display = "none";}
    if(currentRoom.left) {arrowLeft.style.display = "block";}
    else{arrowLeft.style.display = "none";}
    if(currentRoom.right) {arrowRight.style.display = "block";}
    else{arrowRight.style.display = "none";}
}

// Function to handle left button click

function sendMessage(message)
{
    let childNode = document.createElement("div")
    childNode.innerText = message;
    let parentNode = document.querySelector(".room-description")
    parentNode.appendChild(childNode);
    setTimeout(() => 
    {
        childNode.remove();
    }, 2000);
}
function goLeft() {
    if (currentRoom.left) {
        roomHistory.push(currentRoom);
        currentRoom = rooms[currentRoom.left];
        updateRoom();
    } else {
        sendMessage("There's no section on the left.");
    }
    console.log("go left")
}

// Function to handle right button click
function goRight() {
    if (currentRoom.right) {
        roomHistory.push(currentRoom);
        currentRoom = rooms[currentRoom.right];
        updateRoom();
    } else {
        sendMessage("There's no section on the right.");
    }
    console.log("go right")
}

// Function to handle forward button click
function goForward() {
    if (currentRoom.forward) {
        roomHistory.push(currentRoom);
        console.log(rooms[currentRoom.forward]);
        currentRoom = rooms[currentRoom.forward];
        updateRoom();
    } else {
        sendMessage("There's no section forward.");
    }
    console.log("go forward")
}

// Function to handle back button click
function goBack() {
    if (roomHistory.length > 0) {
        currentRoom = roomHistory.pop();
        updateRoom();
    } else {
        sendMessage("You can't go back from here.");
    }
    console.log("go back")
}


export {goLeft,goRight,goForward,goBack};
export {updateRoom};
