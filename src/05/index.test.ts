import { describe, it, expect } from 'vitest'
import { cyberReindeer } from '.'

describe('Reto #3: 🏭 Ponemos en marcha la fábrica', () => {
  it('Si no hay barreras Santa debe avanzar', () => {
    const road = 'S....'
    const time = 5
    const result = [
      'S....',
      '.S...',
      '..S..',
      '...S.',
      '....S'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Si te encuentras una barrera antes del segundo 6 no puedes avanzar', () => {
    const road = 'S|...'
    const time = 5
    const result = [
      'S|...',
      'S|...',
      'S|...',
      'S|...',
      'S|...'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('En el segundo 6 todas las barreras se abren', () => {
    const road = 'S.....|'
    const time = 6
    const result = [
      'S.....|',
      '.S....|',
      '..S...|',
      '...S..|',
      '....S.|',
      '.....S*'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Una vez abiertas las barreras puedes atravesarlas', () => {
    const road = 'S|...'
    const time = 7
    const result = [
      'S|...',
      'S|...',
      'S|...',
      'S|...',
      'S|...',
      '.S...',
      '.*S..'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Test #01', () => {
    const road = 'S..|...|..'
    const time = 10
    const result = [
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Test #02', () => {
    const road = 'S.|.'
    const time = 4
    const result = [
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Test #03', () => {
    const road = 'S.|.|.'
    const time = 7
    const result = [
      'S.|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '..S.*.',
      '..*S*.'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Test #04', () => {
    const road = 'S.|..'
    const time = 6
    const result = [
      'S.|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '..S..'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Test #05', () => {
    const road = 'S.|.|.|......|.||.........'
    const time = 8
    const result = [
      'S.|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '..S.*.*......*.**.........',
      '..*S*.*......*.**.........',
      '..*.S.*......*.**.........'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })

  it('Otros', () => {
    const road = 'S||||'
    const time = 9
    const result = [
      'S||||',
      'S||||',
      'S||||',
      'S||||',
      'S||||',
      '.S***',
      '.*S**',
      '.**S*',
      '.***S'
    ]
    expect(cyberReindeer(road, time)).toStrictEqual(result)
  })
})
