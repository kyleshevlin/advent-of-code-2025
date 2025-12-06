import { getInput, safeGridGet } from '../utils'

const data = getInput(__dirname)

function formatInput(input) {
  return input
    .trim()
    .split('\n')
    .map(row => row.split(''))
}

const ROLL = '@'

const DIRS = [
  [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ],
]

function isAccessibleRoll(grid, rowIdx, colIdx) {
  return (
    DIRS.flat()
      .map(([dx, dy]) => safeGridGet(grid, rowIdx + dy, colIdx + dx))
      .filter(square => square === ROLL).length < 4
  )
}

function _solution(input) {
  const grid = formatInput(input)
  const accessibleRolls = []
  const clone = [...grid.map(row => [...row])]

  for (const [rowIdx, row] of grid.entries()) {
    for (const [colIdx, char] of row.entries()) {
      if (char === ROLL && isAccessibleRoll(grid, rowIdx, colIdx)) {
        accessibleRolls.push([rowIdx, colIdx])
        clone[rowIdx][colIdx] = '.'
      }
    }
  }

  return { accessibleRolls, clone }
}

export function solution1(input) {
  const { accessibleRolls } = _solution(input)

  return accessibleRolls.length
}

export function solution2(input) {
  let total = 0
  let dirty = true
  let currentClone = input

  do {
    dirty = false

    const { accessibleRolls, clone } = _solution(currentClone)

    if (accessibleRolls.length > 0) {
      dirty = true
      total += accessibleRolls.length
      currentClone = clone.map(row => row.join('')).join('\n')
    }
  } while (dirty)

  return total
}

// console.log(solution1(data))
// console.log(solution2(data))
