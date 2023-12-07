import { describe, it, expect } from 'vitest'
import { maxDistance } from '.'

describe('Reto #3: 🏭 Ponemos en marcha la fábrica', () => {
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
