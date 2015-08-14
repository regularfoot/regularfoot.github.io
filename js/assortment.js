/**
 * Created by aleks on 11.08.15.
 */
(function () {

    var board = document.getElementById('board');
    var left_col = document.getElementById('left-col');
    var right_col = document.getElementById('right-col');
    var board_logo = document.getElementById('board-logo');
    var board_btn = document.getElementById("board-btn");
    var bottles = document.getElementById("bottles");
    var bottles_strong = document.getElementById("bottles-strong");



    if (board_btn) {
        board_btn.addEventListener('click', function (event) {
            event.preventDefault();
            board.classList.toggle('strong');
            board_logo.classList.toggle('strong');
            bottles_strong.classList.remove('hidden');
            bottles_strong.classList.add('strong');
            if (bottles_strong.classList.contains('gone')) {
                bottles_strong.style.display = 'block';
                bottles_strong.classList.add('come');
                bottles_strong.classList.remove('gone');
            }
            else if (bottles_strong.classList.contains('come')) {
                bottles_strong.classList.add('gone');
                setTimeout(function () {
                    bottles_strong.style.display = 'none';
                }, 500);

                bottles_strong.classList.remove('come');
            }
            else  {
                bottles_strong.classList.add('come');
            }

            left_col.classList.toggle('hidden');
            right_col.classList.toggle('hidden');
        });
    }

})();