import { describe, it, expect } from 'vitest'
import { decode } from '.'

describe('Reto #3: 🏭 Ponemos en marcha la fábrica', () => {
  it('Debe revertir las cadenas dentro de parentesis y devolverla nueva cadena sin parentesis', () => {
    const result = 'hola mundo'
    expect(decode('hola (odnum)')).toBe(result)
  })

  it('Puede haber mas de un parentesis', () => {
    const result = 'hello world!'
    expect(decode('(olleh) (dlrow)!')).toBe(result)
  })

  it('Parentesis anidados', () => {
    const result = 'santaclaus'
    expect(decode('sa(u(cla)atn)s')).toBe(result)
  })

  it('Parentesis anidados con el padre vacío', () => {
    const result = 'santa'
    expect(decode('((nta)(sa))')).toBe(result)
  })
})
