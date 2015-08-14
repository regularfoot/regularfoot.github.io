/**
 * Created by aleks on 29.07.15.
 */

var Control = (function() {

    function Control(element, options, parent)  {

        this.nextButton = document.querySelector(options.arrow);

        this.parent = parent;

        this.nextButton.addEventListener('click', this.change.bind(this, this.parent), false);


    }

    Control.prototype.change = function(parent) {

        this.parent.nextSlide.call(this.parent);

        this.parent.links[this.parent.activeSlide].setActive(this.parent.options.activeClass, this.parent);

    };

    return Control;

})();