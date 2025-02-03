function climbStairs(n) {
    if (n <= 1)
        return 1;
    var first = 1, second = 1;
    for (var i = 2; i <= n; i++) {
        var temp = first + second;
        first = second;
        second = temp;
    }
    return second;
}
console.log(climbStairs(2));
console.log(climbStairs(3));
