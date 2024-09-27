gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const sections = gsap.utils.toArray("section");

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.5,
      snap: 1 / (sections.length - 1),
      start: "top top",
      end: 3000,
    },
  });

   
  

  gsap.to(".header h1", {
    // Adjusted selector
    fontSize: "2.2rem",
    top: "3.7rem",
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: "1500",
      scrub: 0.5,
    },
  });

  gsap.to(".separator", {
    height: "10rem",
    scrollTrigger: {
      trigger: ".separator",
      scrub: 0.5,
      start: "center center",
      end: 2000,
    },
  });

  document.querySelectorAll("section").forEach((el) => {
    gsap.to(el.querySelector(".description"), {
      x: 0,
      y: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".description"),
        start: "top bottom",
        end: "+=1000",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".section-quote"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".section-quote"),
        start: "top bottom",
        end: "+=20%",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".section-title"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".section-title"),
        start: "top bottom",
        end: "+=10%",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".content-block"), {
      x: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".content-block"),
        start: "top bottom",
        end: "+=" + window.innerWidth,
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector("img"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector("img"),
        start: "top bottom",
        end: "+=40%",
        scrub: 0.5,
      },
    });

    gsap.to(el.querySelector(".large-text"), {
      y: 0,
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: el.querySelector(".large-text"),
        start: "top bottom",
        end: "+=100%",
        scrub: 0.5,
      },
    });
  });
});



// Import GSAP and register ScrollTrigger


document.addEventListener("DOMContentLoaded", () => {
    const targetSection = document.querySelector(".section-benefits");
    const popupModal = document.getElementById("popupModal");
    const closeModalBtn = document.getElementById("closeModal");
    const nextPageBtn = document.getElementById("nextPageBtn");

    // Observer untuk memantau apakah section-benefits sudah terlihat sepenuhnya
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tampilkan modal
                popupModal.style.display = "block";
            }
        });
    }, { threshold: 1.0 });

    // Mulai memantau section-benefits
    observer.observe(targetSection);

    // Event untuk menutup modal
    closeModalBtn.addEventListener("click", () => {
        popupModal.style.display = "none";
    });

    // Event untuk melanjutkan ke halaman selanjutnya
    nextPageBtn.addEventListener("click", () => {
        window.location.href = "impact.html"; // Ganti dengan URL halaman selanjutnya
    });

    // Tutup modal jika pengguna mengklik di luar konten modal
    window.addEventListener("click", (event) => {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });
});






