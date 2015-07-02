var slide_1= $('.slide-1'); //new
var tablet = $('.tablet');  //new

//вешаем обработчик событий на левую стрелку
$('.slider-left').click(function(event) {
	$('.range').slider('enable');	 //new разблокируем положение ползунка
	tablet.draggable('enable');	     //new разблокируем положение таблетки
    $('input').attr('disabled', false); //включаем кнопки
    $('.slider-right').css('cursor', 'pointer');   //смена указателя
    $('.slider-left').css('cursor', 'default');   //смена указателя
});
//вешаем обработчик событий на правую стрелку
$('.slider-right').click(function(event) {
	$('.range').slider('disable');	//new  лочим положение ползунка
	tablet.draggable('disable');	//new  лочим положение таблетки
    $('input').attr('disabled', true);   //отключаем кнопки
    $('.slider-right').css('cursor', 'default');  //смена указателя
    $('.slider-left').css('cursor', 'pointer');   //смена указателя
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
	tablet.draggable({});
    slide_1.droppable('enable'); 
		//наведение таблетки на картинку
        options.over = function(event){
          slide_1.css({
              'background-image': 'url(img/sad_hover.png)',
          });
        };
        //выведение таблетки с картинки
        options.out = function(event){
          slide_1.css({
              'background-image': 'url(img/sad.png)',
          });
        };
        //при бросании на "грусную" картинку - делаем ее "счастливой" (меняем фон)
		//и скрываем таблетку - display:none
		options.drop = function(event){
          tablet.animate({
            'opacity': 'hide'
          });
          //анимация слайдера при переносе картинки
          slide_1.fadeOut(500, function(){  //при исчезании вызываем функцию смены изображения
            slide_1.css({
              background: 'url(img/happy.png)',
              width: '835px',
              left: '100px',
              });
            }
          );
          slide_1.fadeIn(500);
		};
	slide_1.droppable(options);
});
	