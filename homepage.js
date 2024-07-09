document.addEventListener('DOMContentLoaded', function() {
    const changeMoodButton = document.getElementById("change_background");

    function changeColorClick() {
        const bodyStyles = window.getComputedStyle(document.body);
        const currentColor = bodyStyles.backgroundColor;
        const aboutMeSection = document.getElementById("about-me");

        if (currentColor === "rgb(0, 0, 0)") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            aboutMeSection.style.backgroundColor = "white";
            aboutMeSection.style.color = "black";
        } else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            aboutMeSection.style.backgroundColor = "black";
            aboutMeSection.style.color = "white";
        }
    }

    changeMoodButton.addEventListener('click', changeColorClick);
});



let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
        slide.classList.remove('active');
    });
    slides[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);

document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);


