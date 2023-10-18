// Selecciona el botón desplegable
const menuToggle = document.getElementById("menu-toggle");

// Selecciona todos los enlaces de navegación en la barra
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Agrega un evento click a cada enlace de navegación
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => { // Agrega el parámetro 'e' para el evento
        // Cierra la barra de navegación cuando se hace clic en un enlace
        if (menuToggle.getAttribute("aria-expanded") === "true") {
            menuToggle.click();
        }
        // Desplazamiento suave
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top;
            window.scrollBy({
                top: offset,
                left: 0,
                behavior: 'smooth'
            });
        }
    });
});