function camelcase(s) {
    var wordCount = 1;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char >= "A" && char <= "Z") {
            wordCount++;
        }
    }
    return wordCount;
}
var inputString = "saveChangesInTheEditor";
console.log(camelcase(inputString));
