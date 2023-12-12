export function getIndexsForPalindrome (word: string): number[] | null {
  const hLength = word.length / 2
  const isP = word.split('').reverse().join('') === word
  if (isP) return []
  for (let i = 0; i < hLength; i++) {
    const matches = word.matchAll(new RegExp(`[^${word[i]}]`, 'g'))
    for (const { index } of matches) {
      if (index == null) continue
      const copy = [...word];
      [copy[index], copy[i]] = [copy[i], copy[index]]
      const isP = copy.slice(0, hLength).every((letter, i) => {
        return letter === copy[copy.length - i - 1]
      })
      if (isP) return [i, index]
    }
  }
  return null
}
