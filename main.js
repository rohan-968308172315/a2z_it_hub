window.addEventListener('load', () => {
    let portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        let portfolioFilters = document.querySelectorAll('#portfolio-flters li');
        portfolioFilters.forEach((el) => {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                portfolioFilters.forEach((el) => {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                    AOS.refresh();
                });
            });
        });
    }
});

const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
});

new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});


//   Start Our Client Section 

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);


    