/**
 * Created by aleks on 29.07.15.
 */

var Slide = (function() {

    function Slide(node, parent) {
        this.node = node;
        this.parent = parent;
        this.offset = this.offsetTop;
    };


    Slide.prototype.goToBySlide = function() {
        this.animateSlides(this.parent.node.scrollTop,this.node.offsetTop, this.parent.options.speed);
    };


    Slide.prototype.animateSlides = function(parentScrollTop, nodeOffsetTop, interval) {
        var $this = this;
        var timer = setInterval(function() {
            if(parentScrollTop !== nodeOffsetTop) {

                parentScrollTop = (parentScrollTop < nodeOffsetTop) ? parentScrollTop + 5 : parentScrollTop - 5;

                $this.parent.node.scrollTop = parentScrollTop;
            }  else {
                clearInterval(timer);
            }

        },interval);
    };

    return Slide;

})();