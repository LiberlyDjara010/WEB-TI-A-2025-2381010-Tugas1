function gradingStudents(grades) {
  return grades.map(function (grade) {
    if (grade < 38) {
      return grade;
    }
    var nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    return nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade;
  });
}

var grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));
