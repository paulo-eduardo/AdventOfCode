const intcode = require('./index')

describe('Testing math function: ', () => {
  test('Should return 2', () => {
    expect(intcode.math(1, 1, 1)).toEqual(2)
  })

  test('Should return 6', () => {
    expect(intcode.math(2, 3, 2)).toEqual(6)
  })

  test('Should return 9801', () => {
    expect(intcode.math(2, 99, 99)).toEqual(9801)
  })

  test('Should return 2 and 30', () => {
    expect(intcode.math(1, 1, 1)).toEqual(2)
    expect(intcode.math(2, 5, 6)).toEqual(30)
  })
})

describe('Calculate array', () => {
  test('Should return 2,0,0,0,99', () => {
    expect(intcode.mathArray([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99])
  })

  test('Should return 2, 3, 0, 6, 99', () => {
    expect(intcode.mathArray([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99])
  })

  test('Should return 2,4,4,5,99,9801', () => {
    expect(intcode.mathArray([2, 4, 4, 5, 99, 0])).toEqual([
      2,
      4,
      4,
      5,
      99,
      9801
    ])
  })

  test('Should return 30,1,1,4,2,5,6,0,99', () => {
    expect(intcode.mathArray([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99
    ])
  })
})
