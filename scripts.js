document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselImages = document.querySelector('.carousel-images');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.children.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselImages.children.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
