(function () {
    var a_banner1 = document.querySelector(".content__banner-1");
    var a_banner2 = document.querySelector(".content__banner-2");
    var a_banner3 = document.querySelector(".content__banner-3");
    var a_banner4 = document.querySelector(".content__banner-4");
    var banner1 = document.getElementById("banner1");
    var banner2 = document.getElementById("banner2");
    var banner3 = document.getElementById("banner3");
    var banner4 = document.getElementById("banner4");


    a_banner1.addEventListener("mouseover", function (event) {
        banner1.style.backgroundImage = 'url("img/banner1.png")';
    })
    a_banner2.addEventListener("mouseover", function (event) {
        banner2.style.backgroundImage = 'url("img/banner2.png")';
    })
    a_banner3.addEventListener("mouseover", function (event) {
        banner3.style.backgroundImage = 'url("img/banner3.png")';
    })
    a_banner4.addEventListener("mouseover", function (event) {
        banner4.style.backgroundImage = 'url(img/banner4.png)';
    })
    a_banner1.addEventListener("mouseout", function (event) {
        banner1.style.backgroundImage = '';
    })
    a_banner2.addEventListener("mouseout", function (event) {
        banner2.style.backgroundImage = '';
    })
    a_banner3.addEventListener("mouseout", function (event) {
        banner3.style.backgroundImage = '';
    })
    a_banner4.addEventListener("mouseout", function (event) {
        banner4.style.backgroundImage = '';
    })
}());

(function () {
    var btn_nav_sub = document.getElementById("btn_nav_sub");
    var nav_sub = document.getElementById("nav_sub");

    btn_nav_sub.addEventListener("click", function (event) {
        event.preventDefault();
        if (!btn_nav_sub.classList.contains('open')) {
            nav_sub.style.display = 'block';
            btn_nav_sub.style.backgroundColor = '#ffffff';
            btn_nav_sub.style.color = '#8c0a0e';
            btn_nav_sub.classList.add('open');
        }
        else {
            nav_sub.style.display = 'none';
            btn_nav_sub.style.backgroundColor = '#8c0a0e';
            btn_nav_sub.style.color = '#fff';
            btn_nav_sub.classList.remove('open');
        }
    })
}());