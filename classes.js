var Person = /** @class */ (function () {
    function Person() {
        this.firstName = "deepak";
        this.lastName = "math";
    }
    Person.prototype.getfullName = function () {
        return this.firstName + '' + this.lastName;
    };
    return Person;
}());
var aPerson = new Person();
aPerson.firstName = "deepak";
aPerson.lastName = "Mathpal";
console.log(aPerson.getfullName());
console.log(aPerson);
