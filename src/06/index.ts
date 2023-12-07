export function maxDistance (movements: string): number {
  const left = movements.match(/</g)?.length ?? 0
  const right = movements.match(/>/g)?.length ?? 0
  const diff = right - left
  const any = movements.length - left + right
  return Math.abs(diff) + Math.abs(any)
}
