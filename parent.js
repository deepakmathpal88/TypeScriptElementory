var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var parenTclass = /** @class */ (function () {
    function parenTclass() {
    }
    parenTclass.prototype.greet = function () {
        console.log("Hi There");
    };
    return parenTclass;
}());
var childClass = /** @class */ (function (_super) {
    __extends(childClass, _super);
    function childClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return childClass;
}(parenTclass));
var child = new childClass();
child.greet();
