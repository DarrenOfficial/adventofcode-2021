const fs = require("fs");

// read owo.txt then split by new line
const lines = fs
  .readFileSync("owo.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let horizontal = 0;
let depth = 0;
let aim = 0

// split each line, then find the solution

lines.forEach((line) => {
  const { groups } = /^(?<direction>.*) (?<num>.*)$/.exec(line);

  switch (groups.direction) {
    case "forward":
      horizontal += parseInt(groups.num);
      depth = depth + (aim * parseInt(groups.num));
      break;
    case "down":
      aim += parseInt(groups.num);
      break;
    case "up":
      aim -= parseInt(groups.num);
      break;
    default:
      break;
  }
});

// log solution
console.log(horizontal * depth);

// sussy wussy
console.log("On the second day of Christmas, Microsoft gave to me…");
console.log("2 BOSD's");
