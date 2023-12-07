export function drawGift (size: number, symbol: string): string {
  if (size <= 1) return '#\n'
  const stack = [
    '#'.repeat(size) + symbol.repeat(size - 2) + '#'
  ]
  for (let i = size - 1; i > 1; i--) {
    const line = '#' + symbol.repeat(size - 2) + '#' +
      symbol.repeat(i - 2) + '#'
    stack.unshift(' '.repeat(size - i) + line)
    stack.push(line)
  }
  stack.unshift(' '.repeat(size - 1) + '#'.repeat(size))
  stack.push('#'.repeat(size) + '\n')
  return stack.join('\n')
}
