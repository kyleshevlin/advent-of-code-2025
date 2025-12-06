import { solution1, solution2, getIsRepeat } from './'

const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`

test('solution1', () => {
  expect(solution1(input)).toEqual(1227775554)
})

test('solution2', () => {
  expect(solution2(input)).toEqual(4174379265)
})

test('getIsRepeat', () => {
  expect(getIsRepeat('11')).toEqual(true)
  expect(getIsRepeat('111')).toEqual(true)
  expect(getIsRepeat('1111')).toEqual(true)
  expect(getIsRepeat('1212')).toEqual(true)
  expect(getIsRepeat('123123')).toEqual(true)
  expect(getIsRepeat('12341234')).toEqual(true)
  expect(getIsRepeat('12')).toEqual(false)
  expect(getIsRepeat('123')).toEqual(false)
  expect(getIsRepeat('1234')).toEqual(false)
  expect(getIsRepeat('12345')).toEqual(false)
  expect(getIsRepeat('123456')).toEqual(false)
  expect(getIsRepeat('1234567')).toEqual(false)
})
