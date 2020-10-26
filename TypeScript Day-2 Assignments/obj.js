var myClass = /** @class */ (function () {
    function myClass() {
        this.data = 7;
        console.log("This is constructor");
    }
    myClass.prototype.returnData = function () {
        return this.data;
    };
    return myClass;
}());
var obj = new myClass;
console.log("Data is :" + obj.returnData());
