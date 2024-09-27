// Loading Screen Fade-Out
setTimeout(function () {
  document.getElementById("loadingScreen").classList.add("fade-out");
  setTimeout(function () {
    document.getElementById("loadingScreen").style.display = "none";
  }, 2000); // Adjusted to match the slideUpOut animation duration
}, 100);

gsap.registerPlugin(TextPlugin);

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let element = entry.target;

      let tl = gsap.timeline({ paused: true });
      tl.to(
        element.querySelector("h2"),
        { text: element.dataset.title, duration: 1 },
        0.5
      );
      tl.fromTo(
        element.querySelector("h4"),
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("p"),
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("img"),
        { filter: "brightness(0)" },
        { filter: "brightness(1)" },
        2
      );

      if (entry.isIntersecting) {
        tl.play(0);
      } else {
        tl.progress(0);
        element.querySelector("h2").innerText = "";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));

// impact.js

// Existing kode loading screen fade-out
setTimeout(function () {
  document.getElementById("loadingScreen").classList.add("fade-out");
  setTimeout(function () {
    document.getElementById("loadingScreen").style.display = "none";
  }, 2000); // Sesuaikan dengan durasi animasi slideUpOut
}, 100);

gsap.registerPlugin(TextPlugin);




  (entries) => {
    entries.forEach((entry) => {
      let element = entry.target;

      let tl = gsap.timeline({ paused: true });
      tl.to(
        element.querySelector("h2"),
        { text: element.dataset.title, duration: 1 },
        0.5
      );
      tl.fromTo(
        element.querySelector("h4"),
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("p"),
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1 },
        1.5
      );
      tl.fromTo(
        element.querySelector("img"),
        { filter: "brightness(0)" },
        { filter: "brightness(1)" },
        2
      );

      if (entry.isIntersecting) {
        tl.play(0);
      } else {
        tl.progress(0);
        element.querySelector("h2").innerText = "";
      }
    });
  },
  {
    threshold: 0.5,
  }

sections.forEach((section) => observer.observe(section));

// Popup Functionality
window.addEventListener("scroll", function() {
    // Check if the user has scrolled to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showPopup();
    }
});

let popupShown = false; // Untuk memastikan popup hanya ditampilkan sekali

function showPopup() {
    if (!popupShown) {
        popupShown = true;
        const popup = document.getElementById("popup");
        popup.classList.add("show");

        // Animasi popup menggunakan GSAP
        gsap.fromTo(
            popup,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );

        // Menghapus listener scroll setelah popup ditampilkan
        window.removeEventListener("scroll", showPopup);
    }
}

// Handle the button click to navigate to the next page
document.getElementById("navigateButton").addEventListener("click", function() {
    window.location.href = "join.html"; // Ubah ini sesuai URL yang diinginkan
});

// Tambahkan fungsionalitas untuk tombol Lanjut di akhir halaman
document.getElementById("nextButton").addEventListener("click", function() {
    window.location.href = "join.html"; // Ubah ini sesuai URL yang diinginkan
});

// Tambahkan fungsionalitas untuk tombol Kembali
document.getElementById("backButton").addEventListener("click", function() {
  window.location.href = "index.html"; // Ubah ini sesuai URL yang diinginkan
});

// (Opsional) Tambahkan fungsionalitas untuk tombol Kembali di popup
const popupBackButton = document.getElementById("popupBackButton");
if (popupBackButton) {
    popupBackButton.addEventListener("click", function() {
      window.location.href = "index.html"; // Ubah ini sesuai URL yang diinginkan
    });
}
