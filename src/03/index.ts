export function findNaughtyStep (original: string, modified: string): string {
  const longest = original.length >= modified.length ? original : modified
  return [...longest].find((_, i) => {
    return original[i] !== modified[i]
  }) ?? ''
}
