(function () {
    var shop = document.querySelector(".dropdown-toggle");
    var dropdown = document.querySelector(".dropdown");
    var shop_menu = document.querySelector(".navbar__nav .dropdown-menu");
    shop.addEventListener("click", function (event) {
        event.preventDefault();
        shop.classList.add("active");
        if (shop_menu.classList.contains("open")) {
            shop_menu.classList.add("close");
            shop_menu.classList.remove("open");
        }
        else {
            shop_menu.classList.add("open");
            shop_menu.classList.remove("close");
        }
    })
}());
(function () {
    var active_img = document.querySelector(".one__goods img.active");
    var img_mass = document.getElementsByClassName("diactive");
    img_mass[0].addEventListener("click",
        function (event) {
            if (!img_mass[0].classList.contains("active")) {
                console.log("1");
                img_mass[0].classList.add("active");
                img_mass[0].classList.remove("diactive");
                active_img.classList.remove("active");
                active_img.classList.add("diactive");

            }
            active_img = document.querySelector(".one__goods img.active");
            img_mass = document.getElementsByClassName("diactive");
        })
    img_mass[1].addEventListener("click",
        function (event) {
            if (!img_mass[1].classList.contains("active")) {
                console.log("2");
                img_mass[1].classList.add("active");
                img_mass[1].classList.remove("diactive");
                active_img.classList.remove("active");
                active_img.classList.add("diactive");

            }
            active_img = document.querySelector(".one__goods img.active");
            img_mass = document.getElementsByClassName("diactive");
        })
    img_mass[2].addEventListener("click",
        function (event) {
            if (!img_mass[2].classList.contains("active")) {
                console.log("3");
                img_mass[2].classList.add("active");
                img_mass[2].classList.remove("diactive");
                active_img.classList.remove("active");
                active_img.classList.add("diactive");

            }
            active_img = document.querySelector(".one__goods img.active");
            img_mass = document.getElementsByClassName("diactive");
        })

}());

