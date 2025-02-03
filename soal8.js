function isPalindrome(x) {
    if (x < 0)
        return false;
    var str = x.toString();
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
