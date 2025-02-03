function countingValleys(steps, path) {
    var seaLevel = 0;
    var valleys = 0;
    var altitude = 0;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var step = path_1[_i];
        if (step === "U") {
            altitude++;
        }
        else {
            altitude--;
        }
        if (altitude === 0 && step === "U") {
            valleys++;
        }
    }
    return valleys;
}
var input = {
    steps: 8,
    path: "UDDDUDUU",
};
console.log(countingValleys(input.steps, input.path));
