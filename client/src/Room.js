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
    entrance: new Room("Welcome to Home Depot! You're at the entrance.", null, null, "toolsSection", "entrance.jpg"),
    paintSection: new Room("You're in the paint section. Explore the color palette!", null, "lumber", "gardeningSection", "paint_section.jpg"),
    lumber: new Room("Choose your type of wood.", "entrance", "plumbingSection", null, "lumber.jpg"),
    plumbingSection: new Room("You're in the plumbing section. Find everything you need for your projects.", "toolsSection","entrance", "register", "plumbing_section.jpg"),
    gardeningSection: new Room("Welcome to the gardening section. Get ready to beautify your outdoor space.", null, null, "plumbingSection", "gardening_section.jpg"),
    toolsSection: new Room("You're in the tools section. Find the right tools for your DIY projects.", "paintSection", null, "gardeningSection", "tools_section.jpg"),
    register: new Room("You're at the register. Thank you for shopping at Home Depot!", null, null, null, "register.jpg")
};

export let currentRoom = rooms.entrance;
export let roomHistory = [];

// Function to update room description and background image
function updateRoom() {
    document.getElementById("room-description").innerText = currentRoom.description;
    document.body.style.backgroundImage = `url(${currentRoom.backgroundImage})`;
}

// Function to handle left button click
function goLeft() {
    if (currentRoom.left) {
        roomHistory.push(currentRoom);
        currentRoom = rooms[currentRoom.left];
        updateRoom();
    } else {
        alert("There's no section on the left.");
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
        alert("There's no section on the right.");
    }
    console.log("go right")
}

// Function to handle forward button click
function goForward() {
    if (currentRoom.forward) {
        roomHistory.push(currentRoom);
        currentRoom = rooms[currentRoom.forward];
        updateRoom();
    } else {
        alert("There's no section forward.");
    }
    console.log("go forward")
}

// Function to handle back button click
function goBack() {
    if (roomHistory.length > 0) {
        currentRoom = roomHistory.pop();
        updateRoom();
    } else {
        alert("You can't go back from here.");
    }
    console.log("go back")
}

// Event handlers
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
        goBack();
    }
});

export {goLeft,goRight,goForward,goBack};
