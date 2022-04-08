const fs = require("fs");

const negatives = fs
  .readFileSync("./NEGATIVES.txt")
  .toString()
  .trim()
  .split("\n");
const positives = fs.readFileSync("./PERKS.txt").toString().trim().split("\n");

const filteredPositives = positives.filter((s) => !s.includes("____"));
const filteredNegatives = negatives.filter((s) => !s.includes("____"));

fs.writeFileSync(
  "./NO-BLANKS-POSITIVES.txt",
  filteredPositives.sort().join("\n").trim()
);
fs.writeFileSync(
  "./NO-BLANKS-NEGATIVES.txt",
  filteredNegatives.sort().join("\n").trim()
);
