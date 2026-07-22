const nav = document.querySelector(".nav");
let mode=document.querySelector(".mode")

// Current theme
let isDarkMode = true;


// Theme button click
mode.addEventListener("click", function () {

    if (isDarkMode) {

        // ---------- LIGHT MODE ----------
        document.body.style.background =
        "linear-gradient(to right, rgb(237, 237, 245) 0%, rgb(228, 210, 224) 100%)";

        document.body.style.color = "black";

        nav.style.background =
        "linear-gradient(to right, rgb(246, 225, 236) 0%, rgb(0, 0, 14) 100%)";

        // Button icon
        mode.innerHTML = "🌙";

        isDarkMode = false;

    } else {

        // ---------- DARK MODE ----------
        document.body.style.background ="linear-gradient(to right, rgb(0, 0, 24) 0%, rgb(7, 2, 67) 100%)";
        document.body.style.color = "white";

        nav.style.background = "linear-gradient(to right, rgb(249, 156, 94) 0%, rgb(252, 169, 169) 100%)";

        // Button icon
        mode.innerHTML = "☀️";

        isDarkMode = true;
    }

});
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR8-PH9-3gGkiCLMJaR3hrN9YDo4vA4L0",
    authDomain: "portfolio-adarshsingh.firebaseapp.com",
    databaseURL: "https://portfolio-adarshsingh-default-rtdb.firebaseio.com",
    projectId: "portfolio-adarshsingh",
    storageBucket: "portfolio-adarshsingh.firebasestorage.app",
    messagingSenderId: "778293555842",
    appId: "1:778293555842:web:f4054a21fd0c10f2667a9b",
    measurementId: "G-C5P6RG4ZDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Select Form
const form = document.getElementById("contactForm");

// Form Submit
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    // Get Values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    try {

        // Save Data
        await push(ref(db, "contacts"), {

            name: name,
            email: email,
            subject: subject,
            message: message,
            time: new Date().toLocaleString()

        });

        alert("✅ Message Sent Successfully!");

        form.reset();

    } catch (error) {

        alert("❌ Error: " + error.message);

        console.error(error);

    }

});