import { solution1, solution2 } from './'

const input = `
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   + 
`

test('solution1', () => {
  expect(solution1(input)).toEqual(4277556)
})

test('solution2', () => {
  expect(solution2(input)).toEqual(3263827)
})
