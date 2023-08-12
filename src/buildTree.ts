// const jsonData = [
//   {
//     "name": "Electronics",
//     "items": ["Laptop", "Headphones"]
//   },
//   {
//     "name": "Headphones",
//     "items": ["Shure", "Bose", "JLB"]
//   },
//   {
//     "name": "Cars",
//     "items": ["SUV", "Sedan", "Sports"]
//   },
//   {
//     "name": "SUV",
//     "items": ["Honda", "Ferrari"]
//   },
//   {
//     "name": "Laptop",
//     "items": ["Thinkpad"]
//   }
// ]

const buildTree = (data) => {
  //we shouldn't mutate the base data
  const nodes = JSON.parse(JSON.stringify(data))

  for (let i = 0, length = nodes.length; i < length; i ++) {
    const items = nodes[i].items
    for (let j = 0; j < items.length; j ++) {
      const node = items[j]
      const found = nodes.find(n => n.name === node)
      if (found) {
        items[j] = Object.assign({}, found)
        found.removed = true
      } else {
        items[j] = {
          name: node,
          items: []
        }
      }
    }
  }

  return nodes.reduce((arr, node) => {
    if (!node.removed) {
      arr.push(node)
    }
    return arr
  }, [])
}

export default buildTree