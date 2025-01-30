// script.js
document.addEventListener('DOMContentLoaded', () => {
    const trackButton = document.getElementById('trackButton');
    const clickCount = document.getElementById('clickCount');
    let count = 0;
document.body.style.backgroundColor = "#27B793"; // Remplacez #f0f0f0 par la couleur de votre choix

    trackButton.addEventListener('click', () => {
        count++;
        clickCount.textContent = `Click Count: ${count}`;
    });
});