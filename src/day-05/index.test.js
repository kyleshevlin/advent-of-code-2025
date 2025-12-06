import { solution1, solution2 } from './'

const input = `
3-5
10-14
16-20
12-18

1
5
8
11
17
32
`

test('solution1', () => {
  expect(solution1(input)).toEqual(3)
})

test('solution2', () => {
  expect(solution2(input)).toEqual(14)
})
