// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// ตรวจสอบว่า element เหล่านี้มีอยู่จริงก่อนที่จะเพิ่ม event listener
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// --- Fade-in Animation on Scroll ---
const faders = document.querySelectorAll('.fade-in');

if (faders.length > 0) {
    const appearOptions = {
        threshold: 0.2, // 20% ของ element ต้องโผล่มาในจอ
        rootMargin: "0px 0px -50px 0px" // เริ่มทำงานช้ากว่าปกติ 50px
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // ถ้าไม่อยู่ในจอ ก็ไม่ต้องทำอะไร
            } else {
                entry.target.classList.add('visible'); // ถ้าอยู่ในจอ ให้เพิ่มคลาส 'visible'
                observer.unobserve(entry.target); // หยุด observe element นี้หลังจากที่มันโผล่มาแล้ว
            }
        });
    }, appearOptions);

    // สั่งให้ faders ทุกตัวถูก observe
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}