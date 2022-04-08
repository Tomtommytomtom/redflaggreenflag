import positivesRaw from "./assets/GENERATED-POSITIVES.txt?raw";
import negativesRaw from "./assets/GENERATED-NEGATIVES.txt?raw";

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const positives = positivesRaw.split("\n");
const negatives = negativesRaw.split("\n");

export const randomPerk = () => randomElement(positives);

export const randomNegative = () => randomElement(negatives);

export const nRandomElements = (arr, n) => {
  const nSizeEmptyArray = Array.from([...Array(n).keys()]);
  console.log(nSizeEmptyArray);
  return nSizeEmptyArray.map(() => {
    let random = randomElement(arr);
    while (nSizeEmptyArray.includes(random)) {
      random = randomElement(arr);
    }
    console.log(random);
    return random;
  });
};

export const nRandomPerks = (n) => nRandomElements(positives, n);

export const nRandomNegatives = (n) => nRandomElements(negatives, n);
