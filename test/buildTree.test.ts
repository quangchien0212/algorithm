import { describe, expect, test } from "@jest/globals"
import buildTree from "../src/buildTree"

const jsonData = [
  {
    "name": "Electronics",
    "items": ["Laptop", "Headphones"]
  },
  {
    "name": "Headphones",
    "items": ["Shure", "Bose", "JLB"]
  },
  {
    "name": "Cars",
    "items": ["SUV", "Sedan", "Sports"]
  },
  {
    "name": "SUV",
    "items": ["Honda", "Ferrari"]
  },
  {
    "name": "Laptop",
    "items": ["Thinkpad"]
  }
]

describe('buildTree', ()=> {
  test('should build a tree', () => {
    const result = buildTree(jsonData)
    expect(result.length).toEqual(2)
    const electronic = result.find(n => n.name === 'Electronics')
    expect(typeof electronic.items[0]).toEqual('object')
    expect(electronic.items[0].items.length).toEqual(1)
  })
})