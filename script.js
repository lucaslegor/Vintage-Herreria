document.querySelectorAll('.link-ref').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        const destino = document.querySelector(this.getAttribute('href')); // Obtenemos el destino
        destino.scrollIntoView({
            behavior: 'smooth' // Hacemos scroll suave
        });
    });
});
