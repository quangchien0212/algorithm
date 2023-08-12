const languages = ["c++", "java", "javascript", "ruby", "rust", "golang"];
const normalize = (text: string): string => text.trim().toLowerCase();

// O(n2)
function getLanguagesOn2(inputs: string[]): string[] {
  return inputs.map((input) => languages.find(lang => normalize(lang) === normalize(input))).filter((value): value is string => !!value)
}

// O(n)
const languagesLookup = languages.reduce((lookup, language) => {
  lookup[normalize(language)] = 1
  return lookup
}, {})

function getLanguagesOn(inputs: string[]): string[] {
  return inputs.reduce((result: string[], input) => {
    const inputNormalized: string = normalize(input)
    if (!!languagesLookup[inputNormalized]) {
      result.push(inputNormalized)
    }
    return result
  }, [])
}

export default getLanguagesOn;