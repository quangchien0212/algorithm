import {describe, expect, test} from '@jest/globals';
import fillDays from '../src/filLDays';

function arrayCompare(arr1, arr2): boolean {
  return arr1.toString() === arr2.toString()

}
describe('fillDay', () => {
  test('should fill day', () => {
    expect(arrayCompare(fillDays(["Mon"], 7), ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]))
    expect(arrayCompare(fillDays(["Mon"], 10), ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"]))
    expect(arrayCompare(fillDays(["Fri", "Sun"], 5), ["Fri", "Sat", "Sun", "Mon", "Tue"]))
  })
})