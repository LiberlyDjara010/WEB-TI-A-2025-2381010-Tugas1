function plusMinus(arr) {
    var n = arr.length;
    var positiveCount = 0;
    var negativeCount = 0;
    var zeroCount = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num > 0) {
            positiveCount++;
        }
        else if (num < 0) {
            negativeCount++;
        }
        else {
            zeroCount++;
        }
    }
    console.log((positiveCount / n).toFixed(6));
    console.log((negativeCount / n).toFixed(6));
    console.log((zeroCount / n).toFixed(6));
}
var arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
