function recursion(n) {
    if (n == 0 || n == 1 || n == 2) {
        return n;
    }
    else {
        return (n * recursion(n - 1));
    }
}
var output = recursion(2);
console.log(output);
