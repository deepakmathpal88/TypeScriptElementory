class parenTclass{
    firstName: string;
    lastName:string;
    greet(){
        console.log("Hi There");
    }
}

class childClass extends parenTclass {

    
}

var child = new childClass();
child.greet();
