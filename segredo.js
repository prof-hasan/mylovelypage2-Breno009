particlesJS("particles-js", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffeb3b" },
        shape: { type: "star" },
        opacity: { value: 0.5, random: true },
        size: { value: 5, random: true },
        move: { enable: true, speed: 2, direction: "none", random: true }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: false }, onclick: { enable: true, mode: "push" } },
        modes: { push: { particles_nb: 4 } }
    }
});

const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('clique');
    setTimeout(() => cursor.classList.remove('clique'), 100);
});