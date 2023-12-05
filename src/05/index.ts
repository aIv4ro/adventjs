export function cyberReindeer (road: string, time: number): string[] {
  const stack: string[] = []
  let index = 0
  for (let i = 1; i <= time; i++) {
    stack.push(road)
    if (i === 5) road = road.replaceAll('|', '*')
    if (road[index + 1] === '.' || road[index + 1] === '*') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (stack.at(-2) != null && (stack.at(-2)![index] === '*' || stack.at(-2)![index] === '|')) {
        road = road.substring(0, index) + '*S' + road.substring(index + 2, road.length)
      } else {
        road = road.substring(0, index) + '.S' + road.substring(index + 2, road.length)
      }
      index++
    }
  }
  return stack
}
