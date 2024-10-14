document.querySelectorAll('.link-ref').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        const destino = document.querySelector(this.getAttribute('href')); // Obtenemos el destino
        destino.scrollIntoView({
            behavior: 'smooth' // Hacemos scroll suave
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('mobile-menu');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            menu.classList.toggle('show-menu');
        });
    }
});