import { describe, it } from 'node:test'
import { equal } from 'node:assert'
import { decode } from '.'

describe('Reto #3: 🏭 Ponemos en marcha la fábrica', () => {
  it('Debe revertir las cadenas dentro de parentesis y devolverla nueva cadena sin parentesis', () => {
    const result = 'hola mundo'
    equal(decode('hola (odnum)'), result)
  })

  it('Puede haber mas de un parentesis', () => {
    const result = 'hello world!'
    equal(decode('(olleh) (dlrow)!'), result)
  })

  it('Parentesis anidados', () => {
    const result = 'santaclaus'
    equal(decode('sa(u(cla)atn)s'), result)
  })

  it('Parentesis anidados con el padre vacío', () => {
    const result = 'santa'
    equal(decode('((nta)(sa))'), result)
  })
})
