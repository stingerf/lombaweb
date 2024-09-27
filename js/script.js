// Daftar ucapan Hello dalam bahasa dari negara yang terkenal AI-nya
const greetings = [
  "Hello!", // USA
  "नमस्ते!", // India
  "مرحبا", // Arab
  "Halo!", // Indonesia
  "你好!", // China
  "こんにちは!", // Jepang
  "안녕하세요!", // Korea Selatan
  "Привет!", // Rusia
  "Bonjour", // Prancis
  "Hola!", // Spanyol
];

let currentGreeting = 0; // Untuk melacak ucapan saat ini

// Fungsi untuk menampilkan ucapan secara berurutan
function showNextGreeting() {
  if (currentGreeting < greetings.length) {
    // Ganti teks ucapan
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greetings[currentGreeting];

    // Reset animasi fade-in
    const h1Element = greetingElement.parentElement; // Ambil elemen h1 yang membungkus span
    h1Element.style.opacity = 0;
    setTimeout(() => {
      h1Element.style.opacity = 1;
    }, 100); // Timer untuk memulai fade-in lagi

    currentGreeting++;

    // Panggil lagi setelah beberapa detik
    setTimeout(showNextGreeting, 300); // Ubah angka ini untuk mengatur durasi antar ucapan
  } else {
    // Setelah semua ucapan selesai, animasi slide-up pada seluruh layar intro
    document.getElementById("intro").classList.add("slide-up");

    setTimeout(() => {
      document.getElementById("mainContent").style.display = "flex"; // Konten utama ditampilkan
      startDynamicTitle(); // Mulai animasi judul dinamis
    }, 500); // Kurangi durasi menjadi 500ms atau sesuaikan dengan kecepatan animasi slide-up
  }
}

// Panggil fungsi saat halaman dimuat
window.onload = function () {
  showNextGreeting();
};

const words = ["A Smart", "A Sustainable", "An Innovative", "A Better"];
let currentIndex = 0;
let isAnimating = false; // Untuk menghindari animasi ganda

function startDynamicTitle() {
  function changeWord() {
    if (isAnimating) return; // Hentikan fungsi jika animasi sedang berlangsung
    isAnimating = true;

    // Ambil elemen dengan ID 'dynamic-word'
    const dynamicWordElement = document.getElementById("dynamic-word");

    // Tambahkan kelas untuk animasi slide-out
    dynamicWordElement.classList.add("slide-out");

    setTimeout(() => {
      // Ganti teks setelah animasi slide-out selesai
      currentIndex = (currentIndex + 1) % words.length;
      dynamicWordElement.innerText = words[currentIndex];

      // Hapus kelas animasi slide-out dan tambahkan slide-in
      dynamicWordElement.classList.remove("slide-out");
      dynamicWordElement.classList.add("slide-in");

      setTimeout(() => {
        // Hapus kelas animasi slide-in setelah selesai
        dynamicWordElement.classList.remove("slide-in");
        isAnimating = false; // Izinkan animasi berikutnya
      }, 1000); // Durasi animasi slide-in
    }, 1000); // Durasi animasi slide-out
  }

  setInterval(changeWord, 1500); // Ubah kata setiap 3 detik
}

// Daftar warna
const colors = ["rgb(222, 254, 249)", "rgb(255, 255, 227)"];
let currentColorIndex = 0; // Untuk melacak indeks warna saat ini

function changeColor() {
  // Ambil elemen dengan kelas 'big-c'
  const element = document.querySelector(".big-c");

  // Ganti warna teks dengan warna berikutnya dalam array
  element.style.color = colors[currentColorIndex];

  // Update indeks warna untuk warna berikutnya
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Jika indeks melebihi jumlah warna, kembali ke awal
}

setInterval(changeColor, 2000);

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = {
    home: "Home",
    about: "About",
    technology: "AI Impact",
    join: "Join Us",
    resources: "Resources",
  };

  // Change text when navbar is small
  const navSmallLinks = {
    home: "Home",
    about: "What is a Smart City?",
    technology: "AI & Sustainability",
    join: "Get Involved",
    resources: "Resources",
  };

  if (window.scrollY > 50) {
    navbar.classList.add("small");

    // Change the text when scrolling down
    Object.keys(navLinks).forEach((id) => {
      document.getElementById(id).querySelector("a").textContent = navLinks[id];
    });
  } else {
    navbar.classList.remove("small");

    // Restore original text when scrolling up
    Object.keys(navSmallLinks).forEach((id) => {
      document.getElementById(id).querySelector("a").textContent =
        navSmallLinks[id];
    });
  }
});

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}











