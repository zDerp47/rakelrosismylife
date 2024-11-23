const bgColors = ['linear-gradient(to bottom right, #bcffb6, #e3ffe1)', 'linear-gradient(to bottom right, #ffb6c1, #ffe4e1)'];
let currentColorIndex = 0;

// Falling Hearts Animation
function createHeartCaller(){
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 200);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration
    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
    
}

function bgButton(){
    // Cycle through the colors
    currentColorIndex = (currentColorIndex + 1) % bgColors.length;
    document.getElementById("poem-section").style.background = bgColors[currentColorIndex];
    document.getElementById("nav-section").style.background = bgColors[currentColorIndex];
}

function notReady(){
    document.getElementById("notready-btn").remove();
}

function readyPress(){
    document.getElementById("ready-btn").remove();
    document.body.style.background = "linear-gradient(to bottom right, #ffb6c1, #ffe4e1)";
    document.getElementById("header-section").style.background = "linear-gradient(to bottom right, #ffb6c1, #ffe4e1)"
    document.getElementById("nav-section").style.background = "#ffffff"
    document.getElementById("message").textContent = "Look at me babygirl 💚💜"

}
