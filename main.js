var typed = new Typed(".text", {
    strings: ["Frontend Developer", "ML Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Function to animate progress bars
function animateProgressBars() {
    var progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function(bar) {
        var width = parseInt(bar.getAttribute('aria-valuenow'));
        animateProgressBar(bar, width);
    });

    function animateProgressBar(bar, width) {
        var currentWidth = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (currentWidth >= width) {
                clearInterval(interval);
            } else {
                currentWidth++;
                bar.style.width = currentWidth + '%';
                bar.innerText = currentWidth + '%';
            }
        }
    }
}

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4 
};

var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, options);

var targetElement = document.getElementById('TechnicalSkills');
observer.observe(targetElement);
