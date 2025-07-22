AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing page Dusun Wonosobo 1 siap digunakan.");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  const carousel = document.querySelector("#carouselExampleAutoplaying");

  // Dapatkan posisi bagian bawah carousel relatif terhadap viewport
  const carouselBottom = carousel.getBoundingClientRect().bottom-70;

  if (carouselBottom <= 0) {
    // Jika carousel sudah sepenuhnya lewat, ubah navbar jadi transparan
    navbar.classList.add("transparent");
  } else {
    // Jika masih di dalam carousel, tetap gelap
    navbar.classList.remove("transparent");
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('#carouselUMKM1');
  const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);

  const accordionItems = document.querySelectorAll('#nestedAccordion1 .accordion-item');

  accordionItems.forEach(item => {
    const slideKey = item.getAttribute('data-target-slide');
    const collapse = item.querySelector('.accordion-collapse');

    collapse.addEventListener('shown.bs.collapse', function () {
      const slides = carousel.querySelectorAll('.carousel-item');
      slides.forEach((slide, index) => {
        if (slide.getAttribute('data-product') === slideKey) {
          carouselInstance.to(index);
        }
      });
    });
  });
});

// Contoh lazy-load video saat scroll
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video[data-src]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        if (!video.src) {
          video.src = video.dataset.src;
          video.load();
          video.play();
        }
      }
    });
  }, { threshold: 0.5 });

  videos.forEach(video => observer.observe(video));
});
