import { solution1, solution2 } from './'

const input = `
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`

test('solution1', () => {
  expect(solution1(input)).toEqual(13)
})

test('solution2', () => {
  expect(solution2(input)).toEqual(43)
})
