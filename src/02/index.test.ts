import { describe, it, expect } from 'vitest'
import { manufacture } from '.'

describe('Reto #2: 🏭 Ponemos en marcha la fábrica', () => {
  it('Si no hay lista de regalos, devuelve un array vacio', () => {
    const gifts: string[] = []
    const material = 'letras'
    const result: string[] = []
    expect(manufacture(gifts, material)).toStrictEqual(result)
  })

  it('Si no hay materiales, devuelve un array vacio', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const material = ''
    const result: string[] = []
    expect(manufacture(gifts, material)).toStrictEqual(result)
  })

  it('Se deben filtrar los regalos que no puedan fabricarse con los materiales', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const material = 'tronesa'
    const result = ['tren', 'oso']
    expect(manufacture(gifts, material)).toStrictEqual(result)
  })
})
