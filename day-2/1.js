const fs = require("fs");

// load owo.txt split it by new line
const lines = fs
  .readFileSync("owo.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

  let horizontal = 0
  let depth = 0

// parse owo.txt
  lines.forEach(line => {
    const { groups } = /^(?<direction>.*) (?<num>.*)$/.exec(line);
    
    switch (groups.direction) {
      case "forward":
        horizontal += parseInt(groups.num);
        break;
      case "down":
        depth += parseInt(groups.num)
        break;
      case "up":
        depth -= parseInt(groups.num)
        break;
      default:
        break;
    }
  });

  
// log horizontal times depth
console.log(horizontal * depth);
