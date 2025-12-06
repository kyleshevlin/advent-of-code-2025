import { solution1, solution2 } from './'

const input = `
L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`

test('solution1', () => {
  expect(solution1(input)).toEqual(3)
})

test('solution2', () => {
  expect(solution2(input)).toEqual(6)
})
