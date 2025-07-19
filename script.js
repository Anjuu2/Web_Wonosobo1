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


