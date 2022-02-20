import perkRaw from "./assets/PERKS.txt?raw"
import negativeRaw from "./assets/NEGATIVES.txt?raw"

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

const perks = perkRaw.split("\n")
const negatives = negativeRaw.split("\n")

export const randomPerk = () => {
  return randomElement(perks)
}

export const randomNegative = () => {
  return randomElement(negatives)
}

export const nRandomElements = (arr,n) => {
  const nSizeEmptyArray = Array.from([...Array(n).keys()])
  console.log(nSizeEmptyArray);
  return nSizeEmptyArray.map(() => {
    let random = randomElement(arr)
    while(nSizeEmptyArray.includes(random)) {
      random = randomElement(arr)
    }
    console.log(random);
    return random
  })
}

export const nRandomPerks = (n) => {
  return nRandomElements(perks,n)
}

export const nRandomNegatives = (n) => {
  return nRandomElements(negatives,n)
}