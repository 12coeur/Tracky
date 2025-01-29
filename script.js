// script.js
document.addEventListener('DOMContentLoaded', () => {
    const trackButton = document.getElementById('trackButton');
    const clickCount = document.getElementById('clickCount');
    let count = 0;

    trackButton.addEventListener('click', () => {
        count++;
        clickCount.textContent = `Click Count: ${count}`;
    });
});