import { describe, it, expect } from 'vitest'
import { maxDistance } from '.'

describe('Reto #6: 🦌 Los renos a prueba', () => {
  it('Test #1', () => {
    const movements = '>>*<'
    const result = 2
    expect(maxDistance(movements)).toStrictEqual(result)
  })

  it('Test #2', () => {
    const movements = '<<**<<>**>>'
    const result = 5
    expect(maxDistance(movements)).toStrictEqual(result)
  })
})
