import { describe, it } from 'node:test'
import { deepEqual } from 'node:assert/strict'
import { findNaughtyStep } from '.'

describe('Reto #2: 🏭 Ponemos en marcha la fábrica', () => {
  it('Si son iguales devuelve un string vacio', () => {
    const original = 'iiiii'
    const modified = 'iiiii'
    const result = ''
    deepEqual(findNaughtyStep(original, modified), result)
  })

  it('Si son distintas devuelve la primera letra que las diferencia', () => {
    const original = 'abcd'
    const modified = 'abcde'
    const result = 'e'
    deepEqual(findNaughtyStep(original, modified), result)
  })
})
