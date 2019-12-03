const fs = require('fs')

const input = require('./input.json')

const math = (method, numberOne, numberTwo) => {
  switch (method) {
    case 1:
      return numberOne + numberTwo
    case 2:
      return numberOne * numberTwo
  }
}

const mathArray = (arr, restore = false, seedOne = 12, seedTwo = 2) => {
  var tempArr = Object.assign([], arr)
  if (restore) {
    tempArr[1] = seedOne
    tempArr[2] = seedTwo
  }

  for (let i = 0; i < tempArr.length; i += 4) {
    if (tempArr[i] === 99) return tempArr

    const [method, numberOne, numberTwo, position] = tempArr.slice(i, i + 4)

    tempArr[position] = math(method, tempArr[numberOne], tempArr[numberTwo])
  }
}

fs.writeFileSync('result.json', '[' + mathArray(input, (restore = true)) + ']')

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    const result = mathArray(
      input,
      (restore = true),
      (seedOne = i),
      (seedTwo = j)
    )
    if (result[0] === 19690720) console.log(100 * i + j)
  }
}

module.exports = { math, mathArray }
