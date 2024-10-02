const observatør = new IntersectionObserver((innslag) => {
    innslag.forEach((innslag) => {
        if (innslag.isIntersecting) {
            innslag.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach((seksjon) => {
    observatør.observe(seksjon);
});
