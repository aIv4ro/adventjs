import { describe, it, expect } from 'vitest'
import { findFirstRepeated } from '.'

describe('Reto #1: ¡Primer regalo repetido!', () => {
  it('Si no hay regalos repetidos devuelve -1', () => {
    const gifts = [0, 1, 2, 3]
    expect(findFirstRepeated(gifts)).toBe(-1)
  })

  it('Si no hay regalos devuelve -1', () => {
    const gifts: number[] = []
    expect(findFirstRepeated(gifts)).toBe(-1)
  })

  it('Si hay un regalo repetido devuelve el id del regalo repetido', () => {
    const gifts = [1, 3, 2, 8, 2]
    expect(findFirstRepeated(gifts)).toBe(2)
  })

  it('Si hay varios regalos repetidos devuelve el id primer regalo que se repite', () => {
    const gifts = [2, 1, 3, 5, 3, 2]
    expect(findFirstRepeated(gifts)).toBe(3)
  })
})
