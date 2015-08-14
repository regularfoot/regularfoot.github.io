/**
 * Created by aleks on 28.07.15.
 */
var Utils = (function () {
    function Utils() {
    }
    Utils.forEach = function (object, callback, context) {
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                callback.call(context || window, object[property], property);
            }
        }
    };
    Utils.extend = function (origin) {
        var toExtend = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            toExtend[_i - 1] = arguments[_i];
        }
        toExtend.forEach(function (extender) {
            Utils.forEach(extender, function (value, property) {
                origin[property] = extender[property];
            });
        });
        return origin;
    };
    Utils.addClass = function (node, className) {
        var classes = node.classList;
        if (!classes.contains(className)) {
            classes.add(className);
        }
    };
    Utils.removeClass = function (node, className) {
        var classes = node.classList;
        if (classes.contains(className)) {
            classes.remove(className);
        }
    };
    Utils.on = function (event, handler, context) {
    };
    return Utils;
})();
//# sourceMappingURL=Utils.js.map