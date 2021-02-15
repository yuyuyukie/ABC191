function Main(input) {
  // 10の4乗してからroundして整数に直す
  const [X, Y, R] = input
    .split(" ")
    .map((val) => Math.round(Number(val) * 10000));
  let count = 0;
  const startX = X - R; // eg 3672
  const endX = X + R;
  for (let i = Math.ceil(startX / 10000) * 10000; i <= endX; i += 10000) {
    const y = Math.sqrt(R ** 2 - (X - i) ** 2);
    const startY = Math.ceil((Y - y) / 10000);
    const endY = Math.floor((Y + y) / 10000);
    count += endY - startY + 1;
  }
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
