function Main(input) {
  const tmp = input.split("\n");
  const [height, width] = tmp[0].split(" ").map(Number);
  tmp.shift();
  const graffiti = tmp.map((line) => line.split(""));
  let polygonCount = 0;
  for (let row = 0; row < height - 1; row++) {
    for (let col = 0; col < width - 1; col++) {
      let count = 0;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          if (graffiti[row + i][col + j] === "#") {
            count++;
          }
        }
      }
      if (count === 1 || count === 3) {
        polygonCount++;
      }
    }
  }
  console.log(polygonCount);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
