console.log("hello world");
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



console.log(`My number variable `+a);
console.log(`my string variable ` + b);
console.log(`my boolean variable ` +c);
console.log(`my undefined variable ` +d);
console.log(`My array is ` + myArray);

