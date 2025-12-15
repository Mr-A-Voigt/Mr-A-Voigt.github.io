// ...new file...
document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(el => io.observe(el));
    } else {
        // fallback
        const onScroll = () => {
            reveals.forEach(el => {
                const r = el.getBoundingClientRect();
                if (r.top < window.innerHeight - 50) el.classList.add('in-view');
            });
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }
});