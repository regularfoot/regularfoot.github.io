(function () {
    var hamburger = document.querySelector("header .gamburger");
    var nav_menu = document.querySelector(".nav-bar");
    var nav_ul = document.querySelector(".nav-bar ul");
    hamburger.addEventListener("click", function (event) {
        event.preventDefault();

        if (nav_ul.classList.contains("close")) {
            nav_ul.classList.remove("close")
            nav_menu.classList.add("memu-open")
        }
        else {
            nav_ul.classList.add("close");
            nav_menu.classList.remove("memu-open");
        }
    })
}());
(function () {
    var btn1 = document.querySelector(".slider-controls i:nth-child(1)");
    var btn2 = document.querySelector(".slider-controls i:nth-child(2)");
    var btn3 = document.querySelector(".slider-controls i:nth-child(3)");
    var slide1 = document.querySelector(".slider .slide:nth-child(1)");
    var slide2 = document.querySelector(".slider .slide:nth-child(2)");
    var slide3 = document.querySelector(".slider .slide:nth-child(3)");
//        var nav_ul = document.querySelector(".nav-bar ul");
    btn1.addEventListener("click", function (event) {
        event.preventDefault();
        if (!btn1.classList.contains("slider-controls--active")) {
            btn1.classList.add("slider-controls--active");
            btn2.classList.remove("slider-controls--active");
            btn3.classList.remove("slider-controls--active");
            slide1.classList.add("block");
            slide2.classList.remove("block");
            slide3.classList.remove("block");
        }
    });
    btn2.addEventListener("click", function (event) {
        event.preventDefault();
        if (!btn2.classList.contains("slider-controls--active")) {
            btn1.classList.remove("slider-controls--active");
            btn2.classList.add("slider-controls--active");
            btn3.classList.remove("slider-controls--active");
            slide1.classList.remove("block");
            slide2.classList.add("block");
            slide3.classList.remove("block");
        }
    });
    btn3.addEventListener("click", function (event) {
        event.preventDefault();
        if (!btn3.classList.contains("slider-controls--active")) {
            btn1.classList.remove("slider-controls--active");
            btn2.classList.remove("slider-controls--active");
            btn3.classList.add("slider-controls--active");
            slide1.classList.remove("block");
            slide2.classList.remove("block");
            slide3.classList.add("block");
        }
    });
}());
(function () {
    var btn1 = document.querySelector(".table-controls i:nth-child(1)");
    var btn2 = document.querySelector(".table-controls i:nth-child(2)");
    var btn3 = document.querySelector(".table-controls i:nth-child(3)");
    var table = document.querySelector("table");
    if (btn1.classList.contains("table-controls--active")) {
        table.classList.add("t-left");
    }
    btn1.addEventListener("click", function (event) {
        event.preventDefault();
        if (!btn1.classList.contains("table-controls--active")) {
            if(btn2.classList.contains("table-controls--active")) {
                table.classList.add("cl");
                table.classList.remove("cr");
                table.classList.remove("rl");
                table.classList.remove("lc");
                table.classList.remove("lr");
                table.classList.remove("rc");
            }
            if(btn3.classList.contains("table-controls--active")) {
                table.classList.add("rl");
                table.classList.remove("cl");
                table.classList.remove("cr");
                table.classList.remove("lc");
                table.classList.remove("lr");
                table.classList.remove("rc");

            }
            btn1.classList.add("table-controls--active");
            btn2.classList.remove("table-controls--active");
            btn3.classList.remove("table-controls--active");
        }
    });
    btn2.addEventListener("click", function (event) {
        event.preventDefault();
        if (!btn2.classList.contains("table-controls--active")) {
            if(btn1.classList.contains("table-controls--active")) {
                table.classList.add("lc");
                table.classList.remove("cl");
                table.classList.remove("rl");
                table.classList.remove("rc");
                table.classList.remove("lr");
                table.classList.remove("cr");

            }
            if(btn3.classList.contains("table-controls--active")) {
                table.classList.add("rc");
                table.classList.remove("cl");
                table.classList.remove("rl");
                table.classList.remove("lc");
                table.classList.remove("lr");
                table.classList.remove("cr");
            }
            btn1.classList.remove("table-controls--active");
            btn2.classList.add("table-controls--active");
            btn3.classList.remove("table-controls--active");


        }
    });
    btn3.addEventListener("click", function (event) {
        event.preventDefault();
        if (!btn3.classList.contains("table-controls--active")) {
            if(btn2.classList.contains("table-controls--active")) {
                table.classList.add("cr");
                table.classList.remove("cl");
                table.classList.remove("rc");
                table.classList.remove("lc");
                table.classList.remove("lr");
                table.classList.remove("rl");
            }
            if(btn1.classList.contains("table-controls--active")) {
                table.classList.add("lr");
                table.classList.remove("cl");
                table.classList.remove("rl");
                table.classList.remove("lc");
                table.classList.remove("cr");
                table.classList.remove("rc");

            }
            btn1.classList.remove("table-controls--active");
            btn2.classList.remove("table-controls--active");
            btn3.classList.add("table-controls--active");

        }
    });
}());