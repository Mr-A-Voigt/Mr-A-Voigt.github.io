// Simple snowfall generator
(function() {
    const COUNT = 40;
    const container = document.getElementById('snow');
    if (!container) return;

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < COUNT; i++) {
        const flake = document.createElement('span');
        flake.className = 'snowflake';
        flake.textContent = '❄'; // change to '•' or other symbol if desired

        // random horizontal start
        flake.style.left = `${rand(0, 100)}%`;

        // size
        const size = Math.round(rand(10, 28));
        flake.style.fontSize = size + 'px';

        // opacity
        flake.style.opacity = (rand(0.4, 1)).toFixed(2);

        // animation timing
        const duration = rand(6, 18).toFixed(2) + 's';
        const delay = rand(-18, 0).toFixed(2) + 's'; // negative to start at random positions
        flake.style.animation = `fall ${duration} linear ${delay} infinite`;

        // subtle horizontal offset so multiple flakes don't overlap exactly
        flake.style.transform = `translateX(${rand(-50,50)}px)`;

        container.appendChild(flake);
    }

    // remove flakes after long time if page runs long (cleanup)
    setTimeout(() => {
        // leave them; this is optional
    }, 30000);
})();