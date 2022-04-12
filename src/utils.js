import { computed, ref } from "vue";
import positivesRaw from "./assets/GENERATED-POSITIVES.txt?raw";
import negativesRaw from "./assets/GENERATED-NEGATIVES.txt?raw";

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const positivesFromLocalStorageRef = ref(JSON.parse(localStorage.getItem("positives")) || [])
export const negativesFromLocalStorageRef = ref(JSON.parse(localStorage.getItem("negatives")) || [])


export const addCustomPositive = (newPositive) => {
  positivesFromLocalStorageRef.value.unshift(newPositive)
  localStorage.setItem("positives",JSON.stringify(positivesFromLocalStorageRef.value))
}

export const addCustomNegative = (newNegative) => {
  negativesFromLocalStorageRef.value.unshift(newNegative)
  localStorage.setItem("negatives",JSON.stringify(positivesFromLocalStorageRef.value))
}


const staticPositives = positivesRaw.split("\n")
const staticNegatives = negativesRaw.split("\n")

const positives = computed(() => [...positivesFromLocalStorageRef.value,...staticPositives])
const negatives = computed(() => [...negativesFromLocalStorageRef.value,...staticNegatives])

export const randomPerk = () => randomElement(positives);

export const randomNegative = () => randomElement(negatives);

export const nRandomElements = (arr, n) => {
  const nSizeEmptyArray = Array.from([...Array(n).keys()]);
  return nSizeEmptyArray.map(() => {
    let random = randomElement(arr);
    while (nSizeEmptyArray.includes(random)) {
      random = randomElement(arr);
    }
    return random;
  });
};

export const nRandomPerks = (n) => nRandomElements(positives.value, n);

export const nRandomNegatives = (n) => nRandomElements(negatives.value, n);
