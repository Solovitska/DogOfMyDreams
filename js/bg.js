const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const photoContainer = document.querySelector('.photo');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
    // Завантаження завершено
    loadText.style.opacity = 0; // Приховуємо текст
    bg.style.filter = 'blur(0px)'; // Прибираємо розмиття
    photoContainer.style.opacity = 1; // Картинка повністю видима
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Масштабування для створення лінійної анімації
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

// Додаємо ефект при скролі
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const bgPosition = bg.offsetTop;

  if (scrollPosition > bgPosition) {
    bg.style.opacity = 1;
  } else {
    bg.style.opacity = 0;  
  }
});
