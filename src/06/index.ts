export function maxDistance (movements: string): number {
  const left = movements.match(/</g)?.length ?? 0
  const right = movements.match(/>/g)?.length ?? 0
  return Math.abs(right - left) + movements.length - (left + right)
}
