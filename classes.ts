class Person {

    firstName:string;
    lastName:string;
    constructor()
    {
        this.firstName = `deepak`;
        this.lastName = `math`;

    }
    getfullName(){
        return this.firstName + '' + this.lastName;
    }

}

var aPerson = new Person();
aPerson.firstName = "deepak";
aPerson.lastName = "Mathpal";
console.log(aPerson.getfullName());
console.log(aPerson);