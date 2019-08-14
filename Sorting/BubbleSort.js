var UnsortedArray = [12, 10, 18, 20, 30]; //
bubbleSort(UnsortedArray);
console.log(UnsortedArray.toString());
function bubbleSort(arr) {
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
