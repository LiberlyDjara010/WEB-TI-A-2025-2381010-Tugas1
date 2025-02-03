function angryProfessor(k: number, arrivalTimes: number[]): string {
  const onTimeStudents = arrivalTimes.filter((time) => time <= 0).length;

  return onTimeStudents >= k ? "NO" : "YES";
}

const testCases: { k: number; arrivalTimes: number[] }[] = [
  { k: 3, arrivalTimes: [-1, -3, 4, 2] },
  { k: 2, arrivalTimes: [0, -1, 2, 1] },
];

testCases.forEach((test) => {
  console.log(angryProfessor(test.k, test.arrivalTimes));
});
