const work = document.querySelector(".work");
let show = false;

work.addEventListener("click", function () {

    if (!show) {

        work.innerHTML = `
        <section class="about">

            <h1>🚀 About Me</h1>

            <h2>Hi, I'm Adarsh</h2>

            <h3>Full Stack Developer | Web Designer | Python Learner</h3>

            <p>
                Welcome to my portfolio! I am passionate about creating modern,
                responsive, and interactive websites using HTML, CSS, JavaScript,
                and Python.
            </p>

        </section>
        `;

        work.style.backgroundColor = "blue";
        work.style.marginLeft = "70px";
        work.style.marginBottom = "50px";

        show = true;

        setTimeout(() => {
            console.log("work done", 100 + 100);
        }, 1000);

    } else {

        work.innerHTML = `
            <button>
                <b><i>What I do?</i></b>
            </button>
        `;

        show = false;

        work.style.width = "fit-content";
        work.style.margin = "50px auto";
        work.style.backgroundColor = "rgb(7, 2, 67)";
        work.style.padding = "15px";
        work.style.borderRadius = "12px";
        work.style.textAlign = "center";
    }

});// ==========================
// MATRIX RAIN EFFECT
// Made by Adarsh 🚀
// ==========================


// Select the canvas from HTML
const canvas = document.querySelector(".matrix");

// Get the 2D drawing context
const ctx = canvas.getContext("2d");


// Make canvas cover the entire screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Characters that will fall
const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

// Convert string into an array
const chars = letters.split("");


// Size of each character
const fontSize = 20;


// Number of columns that fit on the screen
// Example:
// Screen width = 1000px
// Font size = 20px
// Columns = 1000 / 20 = 50
const columns = Math.floor(canvas.width / fontSize);


// Store the Y-position of every column
const drops = [];


// Give every column a starting position
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}


// --------------------------------
// Function to return one random character
// --------------------------------
function randomLetter() {

    // Random index
    const index = Math.floor(Math.random() * chars.length);

    // Return random character
    return chars[index];
}



// --------------------------------
// Main drawing function
// Runs every few milliseconds
// --------------------------------
function draw() {

    /*
        Draw a transparent black rectangle.

        We DO NOT completely erase the screen.

        Because it is transparent,
        old characters slowly disappear.

        This creates the Matrix trail effect.
    */
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);



    // Text color
    ctx.fillStyle = "#00ff00";

    // Text font
    ctx.font = fontSize + "px monospace";



    // Draw every column
    for (let i = 0; i < drops.length; i++) {

        // Get one random character
        const text = randomLetter();


        /*
            X Position

            Column 0 = 0
            Column 1 = 20
            Column 2 = 40
            Column 3 = 60
        */
        const x = i * fontSize;


        /*
            Y Position

            Stored inside drops[]

            Every frame it increases.

            Example:

            20
            40
            60
            80
        */
        const y = drops[i] * fontSize;


        // Draw character
        ctx.fillText(text, x, y);



        /*
            If character reaches bottom,
            randomly restart from the top.

            Math.random() makes every column
            restart at a different time.

            This makes the animation look natural.
        */
        if (
            y > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }


        // Move current column downward
        drops[i]++;
    }
}



// --------------------------------
// Repeat forever
//
// Every 35 milliseconds:
//
// draw()
// draw()
// draw()
// draw()
// --------------------------------
setInterval(draw, 35);



//setting mode
// ==========================
// DARK / LIGHT MODE TOGGLE
// ==========================

// Select elements
const mode = document.querySelector(".mode");
const nav = document.querySelector(".nav");

// Current theme
let isDarkMode = true;

// Variables used by Matrix Rain
let matrixBg = "rgba(0,0,0,0.05)";
let matrixColor = "#00ff00";

// Theme button click
mode.addEventListener("click", function () {

    if (isDarkMode) {

        // ---------- LIGHT MODE ----------
        document.body.style.background =
        "linear-gradient(to right, rgb(184,184,241) 0%, rgb(249,249,251) 100%)";

        document.body.style.color = "black";

        nav.style.background =
        "linear-gradient(to right, rgb(184,184,241) 0%, rgb(249,249,251) 100%)";

        // Matrix settings
        matrixBg = "rgba(255, 255, 255, 0.95)";
        matrixColor = "#006400";

        // Button icon
        mode.innerHTML = "🌙";

        isDarkMode = false;

    } else {

        // ---------- DARK MODE ----------
        document.body.style.background = "#0a0a23";
        document.body.style.color = "white";

        nav.style.background = "#111";

        // Matrix settings
        matrixBg = "rgba(0,0,0,0.05)";
        matrixColor = "#00ff00";

        // Button icon
        mode.innerHTML = "☀️";

        isDarkMode = true;
    }

});