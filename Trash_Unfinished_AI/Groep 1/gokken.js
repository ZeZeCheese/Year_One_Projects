// Verhaalslides
const slides = [
    { text: "*Geld rinkelt, slot machines klinken*", background: "url(/images/Dia-1.png)" },
    { text: "Wow, wat een spektakel! Ik wil ook snel veel geld verdienen!", background: "url(/images/Dia-1+Geert.png)" },
    { text: "Welk spel is dat? Poker? Ik speelde dat altijd met Ids!", background: "url(/images/Dia-2.png)" },
    { text: "Ik leg wel 10 euro in, hopelijk kan ik er 20 euro van maken.", background: "url(/images/Dia-2+Geert.png)" },
    { text: "*Geert zet de 10 euro in en wint 100 euro in het spel*", background: "url(/images/Dia-2+Geert.png)" },
    { text: "*Geert ziet een slotmachine staan*", background: "url(/images/Dia-3.png)" },
    { text: "Hier kan ik ook wel veel geld verdienen! Vandaag is mijn geluksdag!", background: "url(/images/Dia-3+Geert.png)" },
    { text: "*Geert blijft de hele avond gokken*", background: "url(/images/Dia-3+Geert.png)" },
    { text: "*Geert kijkt op zijn telefoon en ziet dat hij al zijn spaargeld heeft vergokt*", background: "url(/images/Dia-4.png)" },
    { text: "Ownee dit is heel slecht! Ik kan mijn hypotheek niet meer betalen!", background: "url(/images/Dia-4.png)" },
    { text: "Ik leen wel een klein beetje van de bank, dan kan ik mijn geld terug winnen!", background: "url(/images/Dia-5+Geert.png)" },
    { text: "*Maar het lukt Geert niet*", background: "url(/images/Dia-5+Geert.png)" },
    { text: "Mijn huis is nu ingenomen door de bank!", background: "url(/images/Dia-6.png)" },
    { text: "Nu moet ik op straat leven! 😢", background: "url(/images/Dia-6.png)" },
    { text: "*Geert gaat slapen in een bushokje*", background: "url(/images/Dia-7+Geert.png)" },
    { text: "Hey Geert, zit je in de schulden?", background: "url(/images/Dia-7+Geert+GKB.png)" },
    { text: "Kom, ik breng je naar de GKB", background: "url(/images/Dia-7+Geert+GKB.png)" },
    // Voeg hier meer dia's toe indien nodig
];

// z-index
document.getElementById("start").addEventListener("click", function () {
    // Verander de Z-Index van het element met de klasse "myClass"
    var element = document.querySelector(".main");
    var currentZIndex = parseInt(window.getComputedStyle(element).zIndex);
    var newZIndex = currentZIndex === 1 ? -1 : -2; // Wissel tussen 0 en 1

    element.style.zIndex = newZIndex;
});

// Huidige dia-index
let currentSlide = 0;

// Main menu
const mainMenu = document.getElementById("main");
const gameContainer = document.getElementById("game-container");

// Functie om het spel te starten
function startGame() {
    mainMenu.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    updateSlideContent();
}

// Functie om naar de vorige dia te gaan
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlideContent();
    }
}

// Functie om naar de volgende dia te gaan
function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlideContent();
    } else {
        // Als het de laatste dia is, navigeer naar de gewenste URL
        window.location.href = "https://jouw-website.com/nieuwe-pagina";
    }
}

// Functie om de inhoud van de dia bij te werken
function updateSlideContent() {
    const textElement = document.getElementById("slideText");
    textElement.textContent = slides[currentSlide].text;

    const navContainer = document.querySelector(".nav-container");
    navContainer.style.backgroundImage = slides[currentSlide].background;
}



