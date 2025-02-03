function birthdayCakeCandles(candles: number[]): number {
  const maxHeight = Math.max(...candles);

  return candles.filter((candle) => candle === maxHeight).length;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
