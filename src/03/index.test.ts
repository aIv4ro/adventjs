import { describe, it, expect } from 'vitest'
import { findNaughtyStep } from '.'

describe('Reto #3: 😏 El elfo travieso', () => {
  it('Si son iguales devuelve un string vacio', () => {
    const original = 'iiiii'
    const modified = 'iiiii'
    const result = ''
    expect(findNaughtyStep(original, modified)).toBe(result)
  })

  it('Si son distintas devuelve la primera letra que las diferencia', () => {
    const original = 'abcd'
    const modified = 'abcde'
    const result = 'e'
    expect(findNaughtyStep(original, modified)).toBe(result)
  })
})
