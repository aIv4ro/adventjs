import { describe, it, expect } from 'vitest'
import { checkIsValidCopy } from '.'

describe('Reto #12: 📸 ¿Es una copia válida?', () => {
  it('Test #1:', () => {
    const original = 'Santa Claus is coming'
    const copy = 'sa#ta cl#us is comin#'
    const result = true
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #2:', () => {
    const original = 'Santa Claus is coming'
    const copy = 'p#nt: cla#s #s c+min#'
    const result = false
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #3:', () => {
    const original = 'Santa Claus'
    const copy = ' Santa Claus '
    const result = false
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #4:', () => {
    const original = 'Santa Claus'
    const copy = '###:. c:+##'
    const result = true
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #5:', () => {
    const original = 'Santa Claus'
    const copy = 'sant##claus+'
    const result = false
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #6:', () => {
    const original = 'S#n:a Claus'
    const copy = 'S#+:. c:. s'
    const result = true
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #7:', () => {
    const original = 'Santa Claus'
    const copy = 's#+:.#c:. s'
    const result = false
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #8:', () => {
    const original = 's+#:.#c:. s'
    const copy = 's#+:.#c:. s'
    const result = false
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #9:', () => {
    const original = 'S#nta Claus'
    const copy = 'S#ntA ClauS'
    const result = false
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #10:', () => {
    const original = '3 #egalos'
    const copy = '3 .+:# #:'
    const result = true
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #11:', () => {
    const original = '3 regalos'
    const copy = '3        '
    const result = true
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #12:', () => {
    const original = '3 regalos 3'
    const copy = '3 .+:# #: 3'
    const result = true
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })

  it('Test #13:', () => {
    const original = 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños'
    const copy = 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño'
    const result = false
    expect(checkIsValidCopy(original, copy)).toStrictEqual(result)
  })
})
