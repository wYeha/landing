// Модуль инициализации слайдера
function initSlider() {
  const swiperElement = document.querySelector('.swiper');

  // Проверяем, есть ли слайдер на странице
  if (!swiperElement) {
    return;
  }

  const swiper = new Swiper('.swiper', {
    loop: false,
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '#nextBtn',
      prevEl: '#prevBtn',
    },
    on: {
      init: function() {
        createPagination(this);
        updatePagination(this);
      },
      slideChange: function() {
        updatePagination(this);
      }
    }
  });

  // Создание кастомной пагинации (точки)
  function createPagination(swiper) {
    const paginationContainer = document.getElementById('customPagination');
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';

    for (let i = 0; i < swiper.slides.length; i++) {
      const dot = document.createElement('div');
      dot.classList.add('pagination-dot');
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', () => {
        swiper.slideTo(i);
      });
      paginationContainer.appendChild(dot);
    }
  }

  // Обновление активной точки пагинации
  function updatePagination(swiper) {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      if (index === swiper.activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', initSlider);