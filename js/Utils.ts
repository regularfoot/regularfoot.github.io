/**
 * Created by aleks on 28.07.15.
 */
class Utils {

    public static forEach(object:Object, callback:(value:any, key:string)=>void, context?:any):void {
        for(var property in object) {
            if(object.hasOwnProperty(property)) {
                callback.call(context || window, object[property], property);
            }
        }
    }

    public static extend(origin:Object,...toExtend:Array<Object>):Object {
        toExtend.forEach(function(extender) {
            Utils.forEach(extender, function(value, property) {
                origin[property] = extender[property];
            })
        });
        return origin;
    }

    public static addClass = function(node:any, className:string):void {
        var classes = node.classList;


        if(!classes.contains(className)) {
            classes.add(className);
        }
    }

    public static removeClass = function(node:any, className:string):void {
        var classes = node.classList;

        if(classes.contains(className)) {
            classes.remove(className);
        }
    }

    public static on = function(event:string, handler:any, context?:any):void {



    }


}