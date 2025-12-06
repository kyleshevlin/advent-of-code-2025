import { getInput, sum } from '../utils'

const data = getInput(__dirname)

function formatInput(input) {
  return input.trim().split('\n')
}

export function getJoltage(bank, n = 2) {
  if (bank.length < n) return null

  let result = ''
  let start = 0

  for (let digitsNeeded = n; digitsNeeded > 0; digitsNeeded--) {
    const searchEnd = bank.length - digitsNeeded + 1

    let maxDigit = bank[start]
    let maxPos = start

    for (let i = start; i < searchEnd; i++) {
      if (Number(bank[i]) > Number(maxDigit)) {
        maxDigit = bank[i]
        maxPos = i
      }
    }

    result += maxDigit
    start = maxPos + 1
  }

  return parseInt(result, 10)
}

export function solution1(input) {
  const banks = formatInput(input)
  const maxes = banks.map(bank => getJoltage(bank, 2))

  return sum(maxes)
}

export function solution2(input) {
  const banks = formatInput(input)
  const maxes = banks.map(bank => getJoltage(bank, 12))

  return sum(maxes)
}

// console.log(solution1(data))
// console.log(solution2(data))
