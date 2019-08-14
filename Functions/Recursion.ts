function recursion (n:number) : number{
 if(n ==0 || n ==1 ){
   return n
 }else{
   return (n * recursion(n-1));
 }
}

let value : number = recursion(6);
console.log(value);