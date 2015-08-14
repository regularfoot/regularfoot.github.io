/**
 * Created by aleks on 27.07.15.
 */

$(function() {

    if($('.slides-container').length) {
        var vertical = new Vertical('.slides-container');
        var sliderText = $('.v-slide .left-text');
        sliderText.mCustomScrollbar();
    }



    var $contentBlock = $('.content'),
        wHeight = $(window).height();


    var contentVerticalAlign = function(node, wHeight, adjustment) {
        if(node.length > 0) {
            if(wHeight > 800) {
                node.css({
                    marginTop: (wHeight - adjustment - node.height())/2
                })
            }
        }
    };

    contentVerticalAlign($contentBlock, wHeight, 320);
    $(window).resize(function() {
        var wHeight = $(window).height();
        contentVerticalAlign($contentBlock, wHeight, 320);
    });





//assortment page



//main page















});


