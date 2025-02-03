function countingValleys(steps: number, path: string): number {
  let seaLevel = 0;
  let valleys = 0;
  let altitude = 0;

  for (let step of path) {
    if (step === "U") {
      altitude++;
    } else {
      altitude--;
    }

    if (altitude === 0 && step === "U") {
      valleys++;
    }
  }

  return valleys;
}

const input = {
  steps: 8,
  path: "UDDDUDUU",
};

console.log(countingValleys(input.steps, input.path));
