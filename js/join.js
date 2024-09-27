document.addEventListener('DOMContentLoaded', () => {
    const bgs = ['#8b48c8', '#2c2c2c', '#3d3d3d']; // Background colors
  
    const swiper = new Swiper('.swiper', {
        speed: 500,
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: {
            forceToAxis: true,
            thresholdDelta: 30,
        },
        on: {
            slideChange: swiper => {
                document.body.style.backgroundColor = bgs[swiper.activeIndex];
  
                // Show or hide back button based on active slide
                const backButton = document.querySelector('.back-button');
                if (swiper.activeIndex === swiper.slides.length - 1) {
                    backButton.classList.add('show'); // Show button on last slide
                } else {
                    backButton.classList.remove('show'); // Hide button otherwise
                }
            }
        }
    });
  
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.closest('.character').querySelector('img').classList.add('color');
        });
        button.addEventListener('mouseleave', () => {
            button.closest('.character').querySelector('img').classList.remove('color');
        });
    });
  });

  document.querySelector('.back-button').addEventListener('click', function() {
    window.location.href = '/html/impact.html'; // Ganti dengan path yang benar jika perlu
});
  