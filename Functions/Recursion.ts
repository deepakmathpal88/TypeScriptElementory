function recursion (n:number) : number{
 if(n ==0 || n ==1 || n == 2){
   return n
 }else{
   return (n * recursion(n-1));
 }
}

let output : number = recursion(2);
console.log(output);