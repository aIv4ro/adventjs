export function findFirstRepeated (gifts: number[]): number {
  return gifts.find((g, i) => gifts.indexOf(g) !== i) ?? -1
}
