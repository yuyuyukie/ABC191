function Main(input) {
  const tmp = input.split("\n");
  const [N, X] = tmp[0].split(" ").map(Number);
  const A = tmp[1].split(" ").map(Number);
  const fixedA = A.filter((num) => num !== X);
  console.log(fixedA.join(" "));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
