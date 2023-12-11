export function adjustLights (lights: string[]): number {
  const map: any = { '🟢': '🔴', '🔴': '🟢' }
  let left = 0
  let right = 0
  let lPrev, rPrev
  for (let i = 0; i < lights.length; i++) {
    if (lights[i] !== lPrev) lPrev = lights[i]
    else {
      left++
      lPrev = map[lights[i]]
    }
    const rIndex = lights.length - 1 - i
    if (lights[rIndex] !== rPrev) rPrev = lights[rIndex]
    else {
      right++
      rPrev = map[lights[rIndex]]
    }
  }
  return Math.min(left, right)
}
