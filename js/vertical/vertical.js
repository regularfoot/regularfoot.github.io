/**
 * Created by aleks on 27.07.15.
 */

var Vertical = (function() {

    function Vertical(node, options) {
        this.options = options || {
                arrow: ".next-slide-arrow",
                slide: ".v-slide",
                link: ".v-link",
                activeClass: 'active',
                speed: 4
            };
        this.links = [];
        this.node = document.querySelector(node);
        this.init(node);

    }

    Vertical.prototype.init = function (node) {

        this.activeSlide = 0;
        this.createSlides();
        this.setSlide(this.activeSlide);
        this.createControl();
        this.createLinks();


    };

    Vertical.prototype.setNode = function (node) {
        this.node = document.querySelector(node);
    }

    /**
     * @returns {Picture}
     */
    Vertical.prototype.getActive = function () {
        return this.getByIndex(this.activeSlide);
    };

    /**
     * @param {int} index
     * @returns {Picture}
     */
    Vertical.prototype.getByIndex = function (index) {
        return this.slides[index];
    };

    /**
     * @returns {int}
     */
    Vertical.prototype.getSlidesCount = function () {
        return this.slides.length;
    };

    /**
     * @param {int} index
     * @returns {boolean}
     */
    Vertical.prototype.checkIndex = function (index) {

        return this.getByIndex(index) ? true : false;

    };

    /**
     * @param {int} index
     */

    Vertical.prototype.setSlide = function (index) {

        if (this.checkIndex(index)) {
            this.activeSlide = index;
        }

        this.slides[this.activeSlide].goToBySlide();

    };

    Vertical.prototype.createControl = function () {
        this.sliderArrow = new Control(this.node, this.options, this);
    };

    Vertical.prototype.createLinks = function () {
        this.links = Array.prototype.map.call(document.querySelectorAll(this.options.link), function (node, index) {
            return new SliderLink(node, index, this);
        }, this);
    };

    Vertical.prototype.nextSlide = function () {
        this.setSlide(this.activeSlide + 1);
    };

    Vertical.prototype.toSlide = function (index) {
        this.setSlide(index);
    };


    Vertical.prototype.createSlides = function () {
        this.slides = Array.prototype.map.call(this.node.querySelectorAll(this.options.slide), function (node) {
            return new Slide(node, this);
        }, this);
    };


    return Vertical;

})();










