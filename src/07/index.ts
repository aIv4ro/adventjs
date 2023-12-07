export function drawGift (size: number, symbol: string): string {
  let res = ''
  let right = 0
  const length = size * 2 - 1
  const hash = '#'
  for (let i = 0; i < length; i++) {
    if (i > 1) right = Math.max(0, right + 1 * (i <= size - 1 ? 1 : -1))
    const leftSpace = ' '.repeat(Math.max(0, length - size - i))
    if (i === 0 || i === length - 1) {
      res += leftSpace + hash.repeat(size) + '\n'
    } else if (i === size - 1) {
      res += leftSpace + hash.repeat(size) + symbol.repeat(right) + hash + '\n'
    } else {
      res += leftSpace + hash + symbol.repeat(size - 2) + hash + symbol.repeat(right) + hash + '\n'
    }
  }
  return res
}
