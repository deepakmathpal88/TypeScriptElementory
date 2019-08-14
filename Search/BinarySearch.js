var items = [12, 10, 18, 20, 30]; // Make sure it should be sorted
var key = 30;
var index = binarySearch(items, key);
function binarySearch(arr, key) {
    var newItems = arr.sort();
    console.log(newItems);
    var left = 0;
    var right = newItems.length - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        if (newItems[mid] === key) {
            return mid;
        }
        if (newItems[mid] < key) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(index);
