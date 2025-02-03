function birthdayCakeCandles(candles) {
    var maxHeight = Math.max.apply(Math, candles);
    return candles.filter(function (candle) { return candle === maxHeight; }).length;
}
var candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
