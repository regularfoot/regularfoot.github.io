/**
 * Created by aleks on 11.08.15.
 */
(function () {

    var logo_classic = document.getElementById('logo-classic');
    var logo_strong = document.getElementById('logo-strong');
    var left_frost = document.getElementById('left-frost');
    var right_frost = document.getElementById('right-frost');
    var left_close = document.getElementById('left-close');
    var right_close = document.getElementById('right-close');
    var bottle = document.getElementById('bottle');
    var strong_bg = document.getElementById('strong-bg');
    var classic_bg = document.getElementById('classic-bg');
    var age18 = document.getElementById('age18');
    var age18_overlay = document.getElementById('age18-overlay');
    var age18_btn = document.getElementById('age18-btn');

    function toggle(element, class1, class2) {
        if (element.classList.contains(class1)) {
            element.classList.add(class2);
            element.classList.remove(class1);
        }
        else {
            element.classList.add(class1);
            element.classList.remove(class2);
        }
    }

    function clear_strong_bg() {
        strong_bg.classList.remove('close', 'open', 'left-wrap', 'right-wrap',
            'bg-classic-hover-in', 'bg-classic-hover-out', 'bg-strong-hover-in',
            'bg-strong-hover-out'
        );
    }


    if (age18_btn) {
        age18_btn.addEventListener('click', function (event) {
            event.preventDefault();
            age18.classList.add('hidden');
            age18_overlay.classList.add('hidden');
            setTimeout(function () {
                age18.style.display = 'none';
                age18_overlay.style.display = 'none';
            }, 500);

        })
    }
    if (logo_classic) {
        logo_classic.addEventListener('click', function (event) {
            event.preventDefault();

            clear_strong_bg();
            strong_bg.classList.add('close');

            toggle(logo_classic, 'hidden', 'showen');
            toggle(left_frost, 'showen', 'hidden');
            setTimeout(function () {
                logo_classic.style.display = 'none'
            }, 500);

            logo_strong.style.display = 'none';

            if (right_frost.classList.contains('showen')) {
                toggle(logo_strong, 'hidden', 'showen');
                toggle(right_frost, 'showen', 'hidden');
            }
        });
    }
    if (logo_strong) {
        logo_strong.addEventListener('click', function (event) {
            event.preventDefault();

            clear_strong_bg();
            strong_bg.classList.add('open');

            toggle(logo_strong, 'hidden', 'showen');
            toggle(right_frost, 'showen', 'hidden');

            setTimeout(function () {
                logo_strong.style.display = 'none'
            }, 500);

            logo_classic.style.display = 'none';

            if (left_frost.classList.contains('showen')) {
                toggle(logo_classic, 'hidden', 'showen');
                toggle(left_frost, 'showen', 'hidden');
            }
        });
    }
    if (left_close) {
        left_close.addEventListener('click', function (event) {
            event.preventDefault();

            clear_strong_bg();
            strong_bg.classList.add('left-wrap');

            toggle(left_frost, 'showen', 'hidden');

            logo_classic.style.display = 'block';
            toggle(logo_classic, 'hidden', 'showen');
            logo_strong.classList.remove('hidden');
            logo_strong.style.display = 'block';
            logo_strong.classList.add('showen');

        });
    }
    if (right_close) {
        right_close.addEventListener('click', function (event) {
            event.preventDefault();

            clear_strong_bg();
            strong_bg.classList.add('right-wrap');

            toggle(right_frost, 'showen', 'hidden');

            logo_strong.style.display = 'block';
            toggle(logo_strong, 'hidden', 'showen');
            logo_classic.classList.remove('hidden');
            logo_classic.style.display = 'block';
            logo_classic.classList.add('showen');
        });
    }

    if (logo_classic) {
        logo_classic.addEventListener('mouseover', function (event) {
            event.preventDefault();

            logo_strong.classList.remove('showen');
            logo_strong.classList.add('hidden');

            if (!right_frost.classList.contains('showen') ||
                !right_frost.classList.contains('hidden')) {

                clear_strong_bg();
                strong_bg.classList.add('bg-classic-hover-in');

                if (bottle.classList.contains('showen')) {
                    toggle(bottle, 'showen', 'hidden');
                }
            }
        });


        logo_classic.addEventListener('mouseout', function (event) {
            event.preventDefault();

            if (!left_frost.classList.contains('showen')) {
                logo_strong.classList.remove('hidden');
                logo_strong.classList.add('showen');
            }

            if (!right_frost.classList.contains('showen') &&
                !left_frost.classList.contains('showen')) {
                clear_strong_bg();
                strong_bg.classList.add('bg-classic-hover-out');
            }

        });

    }

    if (logo_strong) {
        logo_strong.addEventListener('mouseover', function (event) {
            event.preventDefault();

            logo_classic.classList.remove('showen');
            logo_classic.classList.add('hidden');

            if (!left_frost.classList.contains('showen')) {
                clear_strong_bg();
                strong_bg.classList.add('bg-strong-hover-in');
                if (bottle.classList.contains('hidden')) {
                    toggle(bottle, 'showen', 'hidden');
                }
                else {
                    bottle.classList.add('strong');
                    bottle.classList.add('showen');
                }
            }
        });

        logo_strong.addEventListener('mouseout', function (event) {
            event.preventDefault();

            if (!right_frost.classList.contains('showen')) {
                logo_classic.classList.remove('hidden');
                logo_classic.classList.add('showen');
            }

            if (!left_frost.classList.contains('showen') && !right_frost.classList.contains('showen')) {
                clear_strong_bg();
                strong_bg.classList.add('bg-strong-hover-out');
            }
        });
    }

    window.addEventListener("scroll", function(event) {
        if (window.innerWidth <= 1000) {
            strong_bg.style.backgroundPositionX = -window.pageXOffset -446 + 'px';
            classic_bg.style.backgroundPositionX = -window.pageXOffset -446 + 'px';
        }
        else {
            strong_bg.style.backgroundPositionX = '';
            classic_bg.style.backgroundPositionX = '';
        }
        if (window.innerHeight <= 800) {
            strong_bg.style.backgroundPositionY = -window.pageYOffset -284 + 'px';
            classic_bg.style.backgroundPositionY = -window.pageYOffset -284 + 'px';
        }
        else {
            strong_bg.style.backgroundPositionY = '';
            classic_bg.style.backgroundPositionY = '';

        }




    });
    window.addEventListener("resize", function(event) {
        if (window.innerWidth <= 1000) {
            strong_bg.style.backgroundPositionX = -window.pageXOffset -446 + 'px';
            classic_bg.style.backgroundPositionX = -window.pageXOffset -446 + 'px';
        }
        else {
            strong_bg.style.backgroundPositionX = '';
            classic_bg.style.backgroundPositionX = '';
        }
        if (window.innerHeight <= 800) {
            strong_bg.style.backgroundPositionY = -window.pageYOffset -284 + 'px';
            classic_bg.style.backgroundPositionY = -window.pageYOffset -284 + 'px';
        }
        else {
            strong_bg.style.backgroundPositionY = '';
            classic_bg.style.backgroundPositionY = '';

        }
    });
})();