import { describe, it, expect } from 'vitest'
import { getIndexsForPalindrome } from '.'

describe('Reto #11: 📖 Los elfos estudiosos', () => {
  it('Test #1: anna', () => {
    const word = 'anna'
    const result: number[] = []
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #2: abab', () => {
    const word = 'abab'
    const result = [0, 1]
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #3: abac', () => {
    const word = 'abac'
    const result = null
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #4: aaaaaaaa', () => {
    const word = 'aaaaaaaa'
    const result: number[] = []
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #5: aaababa', () => {
    const word = 'aaababa'
    const result = [1, 3]
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #6: caababa', () => {
    const word = 'caababa'
    const result = null
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #7: rotavator', () => {
    const word = 'rotavator'
    const result: number[] = []
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #8: rotaratov', () => {
    const word = 'rotaratov'
    const result = [4, 8]
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })

  it('Test #9: saippuakivikauppias', () => {
    const word = 'saippuakivikauppias'
    const result: number[] = []
    expect(getIndexsForPalindrome(word)).toStrictEqual(result)
  })
})
