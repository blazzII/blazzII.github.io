document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('count');
    const temples = document.querySelectorAll('h2');
    
    counter.textContent = temples.length;
});