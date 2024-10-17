let flashInterval;

// Function to change the lightbulb color dynamically
function changeColor(color) {
    const lightbulb = document.getElementById("lightbulb");
    lightbulb.style.backgroundColor = color;
}

// Function to adjust the brightness of the lightbulb using CSS opacity
function dimLight(opacityLevel) {
    const lightbulb = document.getElementById("lightbulb");
    lightbulb.style.opacity = opacityLevel;
}

// Function to make the lightbulb flash at a user-defined interval
function flashLight(interval) {
    const lightbulb = document.getElementById("lightbulb");
    if (flashInterval) clearInterval(flashInterval); // Clear any existing flash interval

    flashInterval = setInterval(() => {
        lightbulb.style.visibility = (lightbulb.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, interval);
}

// Function to stop the flashing of the lightbulb
function stopFlashing() {
    clearInterval(flashInterval); // Stop flashing
    const lightbulb = document.getElementById("lightbulb");
    lightbulb.style.visibility = 'visible'; // Ensure lightbulb is visible
}

// Event Listener to toggle the lightbulb on/off when a key is pressed
document.addEventListener("keydown", function() {
    const lightbulb = document.getElementById("lightbulb");
    if (lightbulb.style.backgroundColor === "white") {
        lightbulb.style.backgroundColor = "black"; // Turn off
    } else {
        lightbulb.style.backgroundColor = "white"; // Turn on
    }
});

// Mouseover event to change color when hovering over the lightbulb
document.getElementById("lightbulb").addEventListener("mouseover", function() {
    changeColor('yellow');
});

// Mouseout event to revert the lightbulb color when the mouse leaves
document.getElementById("lightbulb").addEventListener("mouseout", function() {
    changeColor('white');
});
