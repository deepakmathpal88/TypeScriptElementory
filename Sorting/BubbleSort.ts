let UnsortedArray = [12,10,18,20,30];//
let isAscending : boolean
bubbleSort(UnsortedArray);
console.log(UnsortedArray.toString());

function bubbleSort (arr) {
 let length : number = arr.length;
 for(let i = 0; i< length; i++){
     for(let j =0; j< length-i-1;j++){
         if(arr[j+1] > arr[j]){
         let temp = arr[j+1];
         arr[j+1] =  arr[j];
         arr[j] = temp;
         }

     }

 }

}