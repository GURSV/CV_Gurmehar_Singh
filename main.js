var typed = new Typed(".text", {
    strings: ["Data Analyst", "Data Scientist", "ML Model Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
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

// For responsiveness
// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Fetch a tech meme
fetch("https://meme-api.com/gimme/ProgrammerHumor")
  .then((response) => response.json())
  .then((data) => {
    const memeContainer = document.getElementById("memeContainer");
    memeContainer.innerHTML = `
      <h3>A Meme :)</h3>
      <h3>${data.title}</h3>
      <img src="${data.url}" alt="Meme" />
    `;
  });
