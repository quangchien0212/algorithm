import { describe, expect, test } from "@jest/globals";
import { uniq } from "../src/utils/array";

describe('uniq', () => {
  test('should uniq array', () => {
    const array = ["Mon", "Tue", "Wed", "Sun", "Fri", "Mon", "Sun"]
    const result = uniq(array)
    expect(result.toString()).toEqual('Mon,Tue,Wed,Sun,Fri')
  })
})