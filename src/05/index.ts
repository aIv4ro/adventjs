export function cyberReindeer (road: string, time: number): string[] {
  const obj: Record<any, string> = { '*': '*S', '|': '*S' }
  const stack: string[] = []
  let index = 0
  for (let i = 1; i <= time; i++) {
    stack.push(road)
    if (i === 5) road = road.replaceAll('|', '*')
    if (road[index + 1] !== '.' && road[index + 1] !== '*') continue
    const step = obj[stack.at(-2)?.[index] ?? ''] ?? '.S'
    road = road.slice(0, index) + step + road.slice(index + 2)
    index++
  }
  return stack
}
