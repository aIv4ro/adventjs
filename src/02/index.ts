export function manufacture (gifts: string[], materials: string): string[] {
  return gifts.filter(gift => {
    return gift.split('').every(char => materials.includes(char))
  })
}
