function Main(input) {
  const [V, T, S, D] = input[0].split("").map(Number);
  if (V * T > D || V * S < D) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
