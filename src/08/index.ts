export function organizeGifts (gifts: string): string {
  const matches = gifts.matchAll(/(\d+)([a-z])/g)
  return Array.from(matches).map(match => {
    let [q, l] = [Number(match[1]), match[2]]
    const pallets = Math.floor(q / 50)
    q -= pallets * 50
    const boxes = Math.floor(q / 10)
    q -= boxes * 10
    return `[${l}]`.repeat(pallets) +
      `{${l}}`.repeat(boxes) +
      `(${l.repeat(q)})`.repeat(Number(q > 0))
  }).join('')
}
