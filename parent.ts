class parenTclass{
    firstName: string;
    lastName:string;
    greet(){
        console.log("Hi There");
    }
}

class childClass extends parenTclass {
    greet(){
        console.log(`Hello world`);
    }
    greetLikeNormalPeople(){
        super.greet();
    }
}

var child = new childClass();
child.greet();
child.greetLikeNormalPeople();