var typed = new Typed(".text", {
    strings: ["Frontend Developer", "ML Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function() {
    // Select all progress bars
    var progressBars = document.querySelectorAll('.progress-bar');

    // Loop through each progress bar
    progressBars.forEach(function(bar) {
        // Get the width (percentage) from aria-valuenow attribute
        var width = parseInt(bar.getAttribute('aria-valuenow'));
        console.log(width)
        // Animate the width of the progress bar from 0 to the specified percentage
        animateProgressBar(bar, width);
    });

    // Function to animate the progress bar
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
});