export function createChristmasTree (ornaments: string, height: number): string {
  const times = Math.ceil((height * (height + 1) / 2) / ornaments.length)
  const ornamentsArr = [...ornaments.repeat(times)]
  let res = ''
  for (let i = 0; i < height; i++) {
    const str = ornamentsArr.splice(0, i + 1)
      .join(' ')
      .padStart(height + i)
    res += str + '\n'
  }
  return res + ' '.repeat(height - 1) + '|\n'
}
