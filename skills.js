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


let facts = document.querySelector(".facts");

facts.addEventListener("click", function () {

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then(response => response.json())
        .then(data => {

            facts.innerText = data.text;
            facts.style.color = "yellow";
            facts.style.marginLeft="0";

            console.log(data);

        })
        .catch(error => {

            facts.innerText = "Failed to load fact. Click again.";
            console.error(error);

        });

});

facts.addEventListener("mouseenter", function () {
    facts.style.border = "1px solid blue";
});

facts.addEventListener("mouseleave", function () {
    facts.style.border = "none";
});