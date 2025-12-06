import { solution1, solution2, getJoltage } from './'

const input = `
987654321111111
811111111111119
234234234234278
818181911112111
`

test('solution1', () => {
  expect(solution1(input)).toEqual(357)
})

test('solution2', () => {
  expect(solution2(input)).toEqual(3121910778619)
})

test('getJoltage', () => {
  expect(getJoltage('987654321111111')).toEqual(98)
})
