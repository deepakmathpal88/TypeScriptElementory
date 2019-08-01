console.log("********************************************************");
console.log(`Variables in Typescript`);
console.log("********************************************************");
var a: number = 10;;
var b: boolean = true;
var c: string = `deepak`;
var d :undefined;
var myArray = [1,2,3];
var myArrayDeclaration : number[];
myArrayDeclaration= [];
myArrayDeclaration= [1,2];
console.log(`My array before push ` + myArrayDeclaration);
myArrayDeclaration.push(11);
console.log(`My array after push ` + myArrayDeclaration);
var popedArray = myArrayDeclaration.pop();
console.log(`My array after pop  ${myArrayDeclaration}`)

//Tuples

var myTuple : [number, string] = [1, `deepak`];
console.log (`My tuple is : ` +myTuple);

// declaration piped variable


var myPipevar : number|string|boolean;
myPipevar = 10;
myPipevar = 'deepak';
myPipevar = true;


console.log(`My number variable is `+a);
console.log(`my string variable is ` + b);
console.log(`my boolean variable is  ` +c);
console.log(`my undefined variable is ` +d);
console.log(`My array is ` + myArray);

console.log("********************************************************");
console.log(`Operation in Typescript`);
console.log("********************************************************");

let myFloatVar: number = 8.41;
let anotherVariable : number = 8.41;
if (myFloatVar <= anotherVariable)
{
console.log (`My condition is ` + (myFloatVar <= anotherVariable));
}

console.log("********************************************************");
console.log(`String Operators: Concatenation operator (+)`);
console.log("********************************************************");

var myString: string = `deepak` + `mathpal`;
console.log(`My concatatnation string is : ` + myString);
