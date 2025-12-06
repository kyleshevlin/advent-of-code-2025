import { getInput } from '../utils'

const data = getInput(__dirname)

function formatInput(input) {
  return input
    .trim()
    .split('\n')
    .map(line => {
      const [dir, ...amount] = line

      return {
        dir,
        amount: parseInt(amount.join(''), 10),
      }
    })
}

const DIR_TO_OP = {
  R: (x, y) => x + y,
  L: (x, y) => x - y,
}

export function solution1(input) {
  const turns = formatInput(input)
  let loc = 50
  let zeroes = 0

  for (const turn of turns) {
    const op = DIR_TO_OP[turn.dir]
    loc = op(loc, turn.amount) % 100

    if (loc === 0) zeroes++
  }

  return zeroes
}

export function solution2(input) {
  const turns = formatInput(input)
  let loc = 50
  let zeroes = 0

  for (const turn of turns) {
    const op = DIR_TO_OP[turn.dir]

    let turnAmount = turn.amount

    while (turnAmount >= 100) {
      zeroes++
      turnAmount -= 100
    }

    const next = op(loc, turnAmount)

    if (loc !== 0) {
      if (next >= 100 || next <= 0) {
        zeroes++
      }
    }

    loc = (next + 100) % 100
  }

  return zeroes
}

// console.log(solution1(data))
console.log(solution2(data))
