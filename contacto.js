// Selecciona el header
const header = document.querySelector('header');

// Cambia el fondo según el scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY; // Obtén la posición del scroll
    if (scrollPos > 100) {
        header.style.background = 'linear-gradient(to bottom, #111, #444)'; // Nuevo fondo
    } else {
        header.style.background = 'linear-gradient(to bottom, #000, #333)'; // Fondo original
    }
});
