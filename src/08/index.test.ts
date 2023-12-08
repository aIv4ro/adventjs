import { describe, it, expect } from 'vitest'
import { organizeGifts } from '.'

describe('Reto #8: 🏬 Ordenando el almacén', () => {
  it('Test #1: 76a11b', () => {
    const gifts = '76a11b'
    const result = '[a]{a}{a}(aaaaaa){b}(b)'
    expect(organizeGifts(gifts)).toStrictEqual(result)
  })

  it('Test #2: 20a', () => {
    const gifts = '20a'
    const result = '{a}{a}'
    expect(organizeGifts(gifts)).toStrictEqual(result)
  })

  it('Test #3: 70b120a4c', () => {
    const gifts = '70b120a4c'
    const result = '[b]{b}{b}[a][a]{a}{a}(cccc)'
    expect(organizeGifts(gifts)).toStrictEqual(result)
  })

  it('Test #3: 9c', () => {
    const gifts = '9c'
    const result = '(ccccccccc)'
    expect(organizeGifts(gifts)).toStrictEqual(result)
  })

  it('Test #3: 19d51e', () => {
    const gifts = '19d51e'
    const result = '{d}(ddddddddd)[e](e)'
    expect(organizeGifts(gifts)).toStrictEqual(result)
  })
})
