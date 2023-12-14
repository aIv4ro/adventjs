import { describe, it, expect } from 'vitest'
import { calculateTime } from '.'

describe('Reto #11: 📖 Los elfos estudiosos', () => {
  it('Test #1: ["00:10:00", "01:00:00", "03:30:00"]', () => {
    const deliveries = ['00:10:00', '01:00:00', '03:30:00']
    const result = '-02:20:00'
    expect(calculateTime(deliveries)).toStrictEqual(result)
  })

  it('Test #2: ["01:00:00", "05:00:00", "00:30:00"]', () => {
    const deliveries = ['01:00:00', '05:00:00', '00:30:00']
    const result = '-00:30:00'
    expect(calculateTime(deliveries)).toStrictEqual(result)
  })

  it('Test #3: ["02:00:00", "05:00:00", "00:30:00"]', () => {
    const deliveries = ['02:00:00', '05:00:00', '00:30:00']
    const result = '00:30:00'
    expect(calculateTime(deliveries)).toStrictEqual(result)
  })

  it('Test #4: ["00:45:00", "00:45:00", "00:00:30", "00:00:30"]', () => {
    const deliveries = ['00:45:00', '00:45:00', '00:00:30', '00:00:30']
    const result = '-05:29:00'
    expect(calculateTime(deliveries)).toStrictEqual(result)
  })

  it("Test #5: ['02:00:00', '03:00:00', '02:00:00']", () => {
    const deliveries = ['02:00:00', '03:00:00', '02:00:00']
    const result = '00:00:00'
    expect(calculateTime(deliveries)).toStrictEqual(result)
  })

  it("Test #6: ['01:01:01', '09:59:59', '01:01:01']", () => {
    const deliveries = ['01:01:01', '09:59:59', '01:01:01']
    const result = '05:02:01'
    expect(calculateTime(deliveries)).toStrictEqual(result)
  })

  it("Test #7: ['01:01:01', '03:59:59', '01:01:01', '00:57:58']", () => {
    const deliveries = ['01:01:01', '03:59:59', '01:01:01', '00:57:58']
    const result = '-00:00:01'
    expect(calculateTime(deliveries)).toStrictEqual(result)
  })
})
