import { Range } from '@kyleshevlin/range'
import { getInput, sum } from '../utils'

const data = getInput(__dirname)

function formatInput(input) {
  return input.split(',').map(str => {
    const [start, end] = str.split('-').map(Number)

    return new Range(start, end)
  })
}

export function getIsRepeat(str, sliceLength = 1) {
  // If we're beyond the halfway point, there's no possible repeat
  if (sliceLength > str.length / 2) return false

  const slice = str.slice(0, sliceLength)

  for (let i = sliceLength; i < str.length; i += sliceLength) {
    const curSlice = str.slice(i, i + sliceLength)

    // If it matches, try with the next curSlice
    if (curSlice === slice) continue

    // If it fails, try with a greater slice length
    return getIsRepeat(str, sliceLength + 1)
  }

  // If we get here, we found a repeat
  return true
}

export function solution1(input) {
  const ranges = formatInput(input)
  const invalidNumbers = []

  for (const range of ranges) {
    for (const num of range) {
      const str = num.toString()

      if (str.length % 0 === 1) continue

      // We only need to check at the halfway point for even lengthed strings
      if (getIsRepeat(str, str.length / 2)) {
        invalidNumbers.push(num)
      }
    }
  }

  return sum(invalidNumbers)
}

export function solution2(input) {
  const ranges = formatInput(input)
  const invalidNumbers = []

  for (const range of ranges) {
    for (const num of range) {
      const str = num.toString()

      if (getIsRepeat(str)) {
        invalidNumbers.push(num)
        continue
      }
    }
  }

  return sum(invalidNumbers)
}

// console.log(solution1(data))
// console.log(solution2(data))
