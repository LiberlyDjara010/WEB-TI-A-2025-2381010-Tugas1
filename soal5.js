function angryProfessor(k, arrivalTimes) {
    var onTimeStudents = arrivalTimes.filter(function (time) { return time <= 0; }).length;
    return onTimeStudents >= k ? "NO" : "YES";
}
var testCases = [
    { k: 3, arrivalTimes: [-1, -3, 4, 2] },
    { k: 2, arrivalTimes: [0, -1, 2, 1] },
];
testCases.forEach(function (test) {
    console.log(angryProfessor(test.k, test.arrivalTimes));
});
