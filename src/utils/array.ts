export function uniq<T extends any>(array: T[]): T[] {
  return array.filter((item, index) => {
    return array.findIndex((i) => i === item) == index
  })
}