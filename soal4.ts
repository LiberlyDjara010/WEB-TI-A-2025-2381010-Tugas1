function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    let spaces = "";
    let hashes = "";

    // Tambahkan spasi
    for (let j = 0; j < n - i; j++) {
      spaces += " ";
    }

    // Tambahkan tanda #
    for (let k = 0; k < i; k++) {
      hashes += "#";
    }

    console.log(spaces + hashes);
  }
}

staircase(6);
