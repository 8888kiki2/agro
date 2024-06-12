class SmoothScroll {
    constructor(selector) {
        const links = document.querySelectorAll(selector);
        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    const offsetTop = target.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}
