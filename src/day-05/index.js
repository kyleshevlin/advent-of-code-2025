import { getInput, add } from '../utils'
import { Range } from '@kyleshevlin/range'

const data = getInput(__dirname)

function formatInput(input) {
  const [rawIdRanges, rawIngredientIds] = input.trim().split('\n\n')

  const idRanges = rawIdRanges
    .split('\n')
    .map(str => str.split('-').map(Number))
    .map(([start, end]) => new Range(start, end))

  const ingredientIds = rawIngredientIds.split('\n').map(Number)

  return { idRanges, ingredientIds }
}

export function solution1(input) {
  const { idRanges, ingredientIds } = formatInput(input)

  return ingredientIds.filter(id => idRanges.some(range => range.contains(id)))
    .length
}

function mergeRanges(ranges) {
  const sortedRanges = ranges.sort((a, b) => a.start - b.start)

  const result = [sortedRanges[0]]

  for (let i = 1; i < sortedRanges.length; i++) {
    const currentRange = sortedRanges[i]
    const lastRange = result[result.length - 1]

    if (
      lastRange.overlaps(currentRange) ||
      lastRange.isAdjacentTo(currentRange)
    ) {
      result[result.length - 1] = lastRange.union(currentRange)
    } else {
      result.push(currentRange)
    }
  }

  return result
}

export function solution2(input) {
  const { idRanges } = formatInput(input)

  const mergedRanges = mergeRanges(idRanges)

  return mergedRanges.map(range => range.size).reduce(add, 0)
}

// console.log(solution1(data))
// console.log(solution2(data))
