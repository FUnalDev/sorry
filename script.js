document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no-button");

    if (noButton) {
        noButton.addEventListener("mouseover", function () {
            const minX = -0.4167 * window.innerWidth; // Approximately -600 pixels on a 1440px width screen
            const maxX = 0.4167 * window.innerWidth; // Approximately 600 pixels on a 1440px width screen
            const minY = -0.759 * window.innerHeight; // Approximately -600 pixels on a 788px height screen
            const maxY = 0.1266 * window.innerHeight; // Approximately 100 pixels on a 788px height screen
            
            const x = Math.random() * (maxX - minX) + minX; // Adjust x-coordinate range
            const y = Math.random() * (maxY - minY) + minY; // Adjust y-coordinate range
            
            noButton.style.left = x + "px";
            noButton.style.top = y + "px";
        });
    }
   
    const yesButton = document.getElementById("yes-button");

    if (yesButton) {
        yesButton.addEventListener("click", function() {
            window.location.href = "page2.html";
        });
    }
   
    const ehButton = document.getElementById("eh-button");

    if (ehButton) {
        console.log("ehButton found:", ehButton); // Debugging statement
        ehButton.addEventListener("mouseover", function () {
            console.log("I am hereee!!");
            const minX = -0.4167 * window.innerWidth; // Approximately -600 pixels on a 1440px width screen
            const maxX = 0.4167 * window.innerWidth; // Approximately 600 pixels on a 1440px width screen
            const minY = -0.759 * window.innerHeight; // Approximately -600 pixels on a 788px height screen
            const maxY = 0.1266 * window.innerHeight; // Approximately 100 pixels on a 788px height screen
            
            const x = Math.random() * (maxX - minX) + minX; // Adjust x-coordinate range
            const y = Math.random() * (maxY - minY) + minY; // Adjust y-coordinate range
            
            ehButton.style.left = x + "px";
            ehButton.style.top = y + "px";

            console.log(ehButton.style.left, ehButton.style.top)
        });
    }

    const coplerKadar = document.getElementById("copler-kadar-button");

    if (coplerKadar) {
        coplerKadar.addEventListener("click", function() {
            window.location.href = "page3.html";
        });
    }
});
