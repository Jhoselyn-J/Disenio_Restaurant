const carousel = document.querySelector('.carousel');
        const carouselInner = document.querySelector('.carousel-inner');
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');
    
        let currentIndex = 0;
        const slides = Array.from(carouselInner.children);
    
        function Slide(index) {
            carouselInner.style.transform = `translateX(-${index * carousel.clientWidth}px)`;
        }
    
        function prevSlide() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }
            Slide(currentIndex);
        }
    
        function nextSlide() {
            currentIndex++;
            if (currentIndex === slides.length) {
                currentIndex = 0;
            }
            Slide(currentIndex);
        }
    
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);