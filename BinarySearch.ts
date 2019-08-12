let items = [12,10,18,20,30];// Make sure it should be sorted
let key = 30;
const index = binarySearch(items,key);

function binarySearch (arr, key){
let newItems= arr.sort();
console.log(newItems);
let left = 0;
let right = newItems.length - 1;
while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (newItems[mid] === key) {
        return mid;
    }
    if (newItems[mid] < key) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
return -1;
}


console.log(index);



