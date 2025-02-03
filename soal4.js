function staircase(n) {
    for (var i = 1; i <= n; i++) {
        var spaces = "";
        var hashes = "";
        // Tambahkan spasi
        for (var j = 0; j < n - i; j++) {
            spaces += " ";
        }
        // Tambahkan tanda #
        for (var k = 0; k < i; k++) {
            hashes += "#";
        }
        console.log(spaces + hashes);
    }
}
staircase(6);
