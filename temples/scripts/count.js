document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('count');
    const temples = document.querySelectorAll('h3');
    
    counter.textContent = temples.length;
});