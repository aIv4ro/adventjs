export function manufacture (gifts: string[], materials: string): string[] {
  materials = [...new Set(materials.split(''))].join('')
  return gifts.filter(gift => {
    const uc = gift.match(/(.)(?!\1)/g)?.join('') ?? ''
    console.log(uc)
    const regex = new RegExp(`[${uc}]`, 'g')
    return materials.match(regex)?.length === uc.length
  })
}
