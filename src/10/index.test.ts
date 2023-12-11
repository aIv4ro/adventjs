import { describe, it, expect } from 'vitest'
import { createChristmasTree } from '.'

describe('Reto #10: 🎄 Crea tu propio árbol de navidad', () => {
  it('Test #1: 3 -> x', () => {
    const ornaments = 'x'
    const height = 3
    const result = `  x
 x x
x x x
  |
`
    expect(createChristmasTree(ornaments, height)).toStrictEqual(result)
  })

  it('Test #2: 4 -> xo', () => {
    const ornaments = 'xo'
    const height = 4
    const result = `   x
  o x
 o x o
x o x o
   |
`
    expect(createChristmasTree(ornaments, height)).toStrictEqual(result)
  })

  it('Test #3: 5 -> 123', () => {
    const ornaments = '123'
    const height = 5
    const result = `    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`
    expect(createChristmasTree(ornaments, height)).toStrictEqual(result)
  })

  it('Test #4: 3 -> *@o', () => {
    const ornaments = '*@o'
    const height = 3
    const result = `  *
 @ o
* @ o
  |
`
    expect(createChristmasTree(ornaments, height)).toStrictEqual(result)
  })
})
