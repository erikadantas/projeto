let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length; 

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; 
}
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1; 
    updateCarousel();
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1; 
    updateCarousel();
});
setInterval(() => {
    nextBtn.click(); 
}, 4000); 
