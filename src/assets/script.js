const fs = require('fs');

const negatives = fs.readFileSync('./NEGATIVES.txt').toString().trim().split('\n')
const positives = fs.readFileSync('./PERKS.txt').toString().trim().split('\n')

patterns = {
  is: /^is\s(.*)/,
  owns: /^owns\s(.*)/,
  loves: /^loves\s(.*)/,
  thinks: /^thinks\s(.*)/
}

const resultNegatives = Object.keys(patterns).reduce((acc,curr) => ({ ...acc,[curr]: [] }),{})
const resultPositives = Object.keys(patterns).reduce((acc,curr) => ({ ...acc,[curr]: [] }),{})

const findMatches = (strings) => {
  const results = Object.keys(patterns).reduce((acc,curr) => ({ ...acc,[curr]: [] }),{})
  strings.forEach((s) => {
    Object.entries(patterns).forEach(([k,p]) => {
    if(p.test(s)){
        const group = s.match(p)[1]
        results[k].push(group)
      }
    })
  })

  return results
}

const negativeResults = findMatches(negatives)
const positiveResults = findMatches(negatives)

const filterOutResults = (strings) => {
  const filtered = strings.filter(s => {
    for(let p of Object.values(patterns)){
      if(p.test(s)){
        console.log(s,p,'should be filtered out')
        return false
      }
    }
    return true
  })

  filtered.push(...Object.keys(patterns).map(k => `${k} ____`))
  return filtered
}

// console.log(negativeResults);
// console.log(positiveResults);

console.log(filterOutResults(negatives));

const blankJSON = {
  positives: positiveResults,
  negatives: negativeResults
}

fs.writeFileSync("./BLANK.json",JSON.stringify(blankJSON))

fs.writeFileSync("./FILTERED-POSITIVES.txt",filterOutResults(positives).sort().join("\n").trim());
fs.writeFileSync("./FILTERED-NEGATIVES.txt",filterOutResults(negatives).sort().join("\n").trim());






