// LOADER
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => loader.remove(), 3000);
    }
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});
