/**
 * Created by aleks on 11.08.15.
 */
(function () {

    var close = document.getElementById('popup-close');
    var popup = document.getElementById('popup');
    var lightbox = document.getElementById('popup-overlay');
    var cont_btn = document.getElementById("connection");

    if (cont_btn) {
        if (popup.classList.contains('hidden')) {
            cont_btn.addEventListener('click', function (event) {
                event.preventDefault();
                console.log("test ok");
                popup.classList.remove('hidden');
                lightbox.classList.remove('hidden');
                cont_btn.removeEventListener();
            });
        }

        close.addEventListener('click', function () {
            popup.classList.add('hidden');
            lightbox.classList.add('hidden');
        });
    }

})();