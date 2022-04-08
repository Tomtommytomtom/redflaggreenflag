const fs = require("fs");

const blankN = fs
  .readFileSync("./JUST-BLANKS-NEGATIVES.txt")
  .toString()
  .trim()
  .split("\n");
const blankP = fs
  .readFileSync("./JUST-BLANKS-POSITIVES.txt")
  .toString()
  .trim()
  .split("\n");
const noBlankN = fs
  .readFileSync("./NO-BLANKS-NEGATIVES.txt")
  .toString()
  .trim()
  .split("\n");
const noBlankP = fs
  .readFileSync("./NO-BLANKS-POSITIVES.txt")
  .toString()
  .trim()
  .split("\n");

const [negativeBlanksRaw, positiveBlanksRaw] = fs
  .readFileSync("./BLANKS.txt")
  .toString()
  .trim()
  .split("\n\n")
  .map((s) => s.split("\n"))
  .map((a) => {
    const temp = a;
    temp.shift();
    return temp;
  });

const buildObject = (blanks) => {
  const result = {};

  blanks.forEach((line) => {
    const [key, value] = line.split(":");
    value
      .trim()
      .split(",")
      .map((v) => v.trim())
      .forEach((v) => {
        if (!result[key]) {
          result[key] = [v];
        } else {
          result[key].push(v);
        }
      });
  });

  return result;
};

const positiveBlanks = buildObject(positiveBlanksRaw);
const negativeBlanks = buildObject(negativeBlanksRaw);

const templatePattern = /<(.*)>/;

const replaceTemplateForValue = (str, value) => str.replace(templatePattern, value);

const fillInBlanks = (blanks, fillers) => {
  const result = [];
  blanks.forEach((templateString) => {
    const key = templateString.match(templatePattern)[1];
    fillers[key]?.forEach((stringFiller) => {
      const toInsert = replaceTemplateForValue(templateString, stringFiller);
      result.push(toInsert);
    });
  });

  return result;
};

const generatedPositives = fillInBlanks(blankP, positiveBlanks);
const generatedNegatives = fillInBlanks(blankN, negativeBlanks);

const allPositives = [...noBlankP.sort(), ...generatedPositives.sort()];
const allNegatives = [...noBlankN.sort(), ...generatedNegatives.sort()];

fs.writeFileSync("./GENERATED-POSITIVES.txt", allPositives.join("\n").trim());
fs.writeFileSync(
  "./GENERATED-NEGATIVES.txt",
  allNegatives.sort().join("\n").trim()
);
