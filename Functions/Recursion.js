function recursion(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    else {
        return (n * recursion(n - 1));
    }
}
var value = recursion(6);
console.log(value);
