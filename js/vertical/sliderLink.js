/**
 * Created by aleks on 29.07.15.
 */

var SliderLink = (function() {

    function SliderLink(node, index, parent) {
        this.node = node;
        this.parent = parent;
        this.index = index;
        this.addLinkEvent('click');
        this.setActive(this.parent.options.activeClass, this.parent)
    }

    SliderLink.prototype.addLinkEvent = function(event) {
        this.node.addEventListener(event, this.transition.bind(this));
    };


    SliderLink.prototype.transition = function() {
        this.parent.toSlide.call(this.parent, this.index);
        this.setActive(this.parent.options.activeClass, this.parent);
    };

    SliderLink.prototype.setActive = function(activeClass, parent) {


        this.parent.links.forEach(function(element) {
           Utils.removeClass(element.node, activeClass)
        });


        if(this.index == parent.activeSlide) {
            Utils.addClass(this.node, activeClass);
        }
    };



    return SliderLink;

})();