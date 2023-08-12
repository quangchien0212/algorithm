import { describe, expect, test } from "@jest/globals";
import getLanguages from "../src/hashmap";

describe('hashmap', () => {
  test('should found the value', () => {
    const inputs = ['Java', 'ruBy', 'rails']
    const result = getLanguages(inputs)
    expect(result.toString()).toEqual('java,ruby')
  })
})