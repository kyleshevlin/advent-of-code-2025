import { getInput, sum, product } from '../utils'

const data = getInput(__dirname)

const OP_TO_FN = {
  '+': sum,
  '*': product,
}

function formatInput(input) {
  return input.trim().split('\n')
}

export function solution1(input) {
  const rows = formatInput(input)

  const groups = []
  for (const row of rows) {
    const cols = row.trim().split(' ').filter(Boolean)

    for (let i = 0; i < cols.length; i++) {
      if (!groups[i]) groups[i] = []
      groups[i].push(cols[i])
    }
  }

  const problems = groups.map(group => {
    const op = group.pop()
    return { op, nums: group.map(Number) }
  })

  const results = problems.map(problem => {
    const { op, nums } = problem
    return OP_TO_FN[op](nums)
  })

  return sum(results)
}

export function solution2(input) {
  const rows = formatInput(input)
  // Find the longest row, we're going to need to pad shorter ones to match
  const longestRow = Math.max(...rows.map(row => row.length))
  const paddedRows = rows.map(row => row.padEnd(longestRow, ' '))

  // Pop the last row, it contains the operators
  const rawOps = paddedRows.pop()
  const ops = rawOps.split(' ').filter(Boolean)

  // Gather all the characters vertically
  const cols = []
  for (let i = 0; i < paddedRows[0].length; i++) {
    const col = []
    for (const row of paddedRows) {
      col.push(row[i])
    }

    cols.push(col.join(''))
  }

  // We need to group the numbers together for each problem
  // The divider is an item of all spaces
  const groups = []
  let idx = 0
  for (const col of cols) {
    if (col.trim() === '') {
      idx++
      continue
    }

    if (!groups[idx]) groups[idx] = []
    groups[idx].push(col)
  }

  const problems = groups.map((group, idx) => {
    const op = ops[idx]
    return { op, nums: group.map(Number) }
  })

  const results = problems.map(problem => {
    const { op, nums } = problem
    return OP_TO_FN[op](nums)
  })

  return sum(results)
}

// console.log(solution1(data))
// console.log(solution2(data))
