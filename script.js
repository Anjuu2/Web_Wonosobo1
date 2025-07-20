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

console.log("carouselBottom:", carouselBottom, "scrollY:", window.scrollY);

const scrollContainer = document.getElementById('scroll-section');

// Set scroll to middle on load
window.addEventListener('load', () => {
  const middle = scrollContainer.scrollWidth / 2 - scrollContainer.clientWidth / 2;
  scrollContainer.scrollLeft = middle;
});

// Reset to middle if near ends
scrollContainer.addEventListener('scroll', () => {
  const scrollLeft = scrollContainer.scrollLeft;
  const maxScroll = scrollContainer.scrollWidth;
  const containerWidth = scrollContainer.clientWidth;

  if (scrollLeft < 50) {
    scrollContainer.scrollLeft = maxScroll / 2 - containerWidth;
  }

  if (scrollLeft + containerWidth > maxScroll - 50) {
    scrollContainer.scrollLeft = maxScroll / 2 - containerWidth;
  }
});
