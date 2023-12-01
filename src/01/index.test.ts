import { describe, it } from 'node:test'
import { equal } from 'node:assert/strict'
import { findFirstRepeated } from '.'

describe('Reto #1: ¡Primer regalo repetido!', () => {
  it('Si no hay regalos repetidos devuelve -1', () => {
    const gifts = [0, 1, 2, 3]
    equal(findFirstRepeated(gifts), -1)
  })

  it('Si no hay regalos devuelve -1', () => {
    const gifts: number[] = []
    equal(findFirstRepeated(gifts), -1)
  })

  it('Si hay un regalo repetido devuelve el id del regalo repetido', () => {
    const gifts = [1, 3, 2, 8, 2]
    equal(findFirstRepeated(gifts), 2)
  })

  it('Si hay varios regalos repetidos devuelve el id primer regalo que se repite', () => {
    const gifts = [2, 1, 3, 5, 3, 2]
    equal(findFirstRepeated(gifts), 3)
  })
})
