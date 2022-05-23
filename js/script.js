//  Penggunaan ScrolltoTop Menggunakan JavaScript
function scrollTop() {
    const scrollTop = document.getElementById('scrolltop');
    // Ketika scroll lebih dari 200 maka tambahakn class (show-scroll) pada class scrolltop sehingga scrolltop akan muncul &
    // jika tidak maka remove atau hapus class (show-scroll) pada scrolltop sehingga scrolltop tidak terlihat
    if (this.scrollY >= 200)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)