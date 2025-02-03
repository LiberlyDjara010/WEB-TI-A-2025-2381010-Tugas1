function climbStairs(n: number): number {
  if (n <= 1) return 1;

  let first = 1,
    second = 1;
  for (let i = 2; i <= n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }

  return second;
}

console.log(climbStairs(2));
console.log(climbStairs(3));
