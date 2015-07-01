//вешаем обработчик событий на левую стрелку
$('.slider-left').click(function(event) {
	if (!($('.slide-1').hasClass('enable'))) {
		$('.slide-1').addClass('enable');			//
		$('.slide-2').removeClass('enable');		//
	}
	if (($('.slide-1').hasClass('enable'))) {
		$('.slider-left').css('cursor', 'default');
		$('.slider-right').css('cursor', 'pointer');
	}
	else {
		$('.slider-left').css('cursor', 'pointer');
		$('.slider-right').css('cursor', 'default');
	}
});
//вешаем обработчик событий на правую стрелку
$('.slider-right').click(function(event) {
	if (!($('.slide-2').hasClass('enable'))) {
		$('.slide-2').addClass('enable');			//
		$('.slide-1').removeClass('enable');		//
	}
	if (($('.slide-1').hasClass('enable'))) {
		$('.slider-left').css('cursor', 'default');
		$('.slider-right').css('cursor', 'pointer');
	}
	else {
		$('.slider-left').css('cursor', 'pointer');
		$('.slider-right').css('cursor', 'default');
}
});


//переменные ползунка
var slider_max = 21;	//максимальное значение
var slider_min = 1;		//минимальное значение
var slider_step = 1;	//шаг

//задаем блоку .range ползунок
$('.range').slider({min: slider_min, max: slider_max, step: slider_step});

//обрабатываем события сдвига ползунка
$('form').bind('slide',function(event,info) {
	
	//добавляем связь с цифрами  и меняем им фон при совпадении значений
	for (var i = slider_min; i <= slider_max; i+=slider_step) {
		if (info.value == i) {
			$('.numbers div').removeClass('active');
			$('.numbers div:nth-child(' + i +')').addClass('active');
		}
	}
});

//перенос таблетки
$(function(){
	var options = {};
	$('.tablet').draggable({});
    $('.slide-1').droppable('enable'); 
		//при бросании на "грусную" картинку - делаем ее "счастливой" (меняем фон)
		//и скрываем таблетку - display:none
		options.drop = function(event){
			$('.slide-1').css('background', 'url(img/happy.png)');
			$('.slide-1 .tablet').css('display', 'none');
		};
	$('.slide-1').droppable(options);
});
	