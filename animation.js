let interval;

function startAnimation() {
    stopAnimation(); 
    const bars = document.querySelectorAll('.bar');

    interval = setInterval(() => {
        bars.forEach(bar => {
            const randomHeight = Math.floor(Math.random() * 145);
            bar.style.height = `${randomHeight}px`;
        });
    }, 750);
}

function resetAnimation() {
    stopAnimation();
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.height = '145px';
    });
}

function stopAnimation() {
    clearInterval(interval);
}