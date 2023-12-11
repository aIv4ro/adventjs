import { describe, it, expect } from 'vitest'
import { adjustLights } from '.'

describe('Reto #9: 🚦 Alterna las luces', () => {
  it('Test #1: ["🟢", "🔴", "🟢", "🟢", "🟢"]', () => {
    const lights = ['🟢', '🔴', '🟢', '🟢', '🟢']
    const result = 1
    expect(adjustLights(lights)).toStrictEqual(result)
  })

  it('Test #2: ["🔴", "🔴", "🟢", "🟢", "🔴"]', () => {
    const lights = ['🔴', '🔴', '🟢', '🟢', '🔴']
    const result = 2
    expect(adjustLights(lights)).toStrictEqual(result)
  })

  it('Test #3: ["🟢", "🔴", "🟢", "🔴", "🟢"]', () => {
    const lights = ['🟢', '🔴', '🟢', '🔴', '🟢']
    const result = 0
    expect(adjustLights(lights)).toStrictEqual(result)
  })

  it('Test #4: ["🔴", "🔴", "🔴"]', () => {
    const lights = ['🔴', '🔴', '🔴']
    const result = 1
    expect(adjustLights(lights)).toStrictEqual(result)
  })

  it('Test #5: ["🟢", "🟢", "🟢", "🟢"]', () => {
    const lights = ['🟢', '🟢', '🟢', '🟢']
    const result = 2
    expect(adjustLights(lights)).toStrictEqual(result)
  })

  it('Test #6: []', () => {
    const lights: string[] = []
    const result = 0
    expect(adjustLights(lights)).toStrictEqual(result)
  })

  it('Test #7: ["🟢", "🟢", "🔴", "🔴"]', () => {
    const lights = ['🟢', '🟢', '🔴', '🔴']
    const result = 2
    expect(adjustLights(lights)).toStrictEqual(result)
  })

  it('Test #8: ["🔴", "🔴", "🟢", "🔴"]', () => {
    const lights = ['🔴', '🔴', '🟢', '🔴']
    const result = 1
    expect(adjustLights(lights)).toStrictEqual(result)
  })
})
