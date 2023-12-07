import { describe, it, expect } from 'vitest'
import { drawGift } from '.'

describe('Reto #7: 📦 Las cajas en 3D', () => {
  it('Test #1: size - 1', () => {
    const size = 1
    const symbol = '^'
    const result = `#
`
    expect(drawGift(size, symbol)).toStrictEqual(result)
  })

  it('Test #2: size - 2', () => {
    const size = 2
    const symbol = '^'
    const result = ` ##
###
##
`
    expect(drawGift(size, symbol)).toStrictEqual(result)
  })

  it('Test #3: size - 4', () => {
    const size = 4
    const symbol = '+'
    const result = `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`
    expect(drawGift(size, symbol)).toStrictEqual(result)
  })

  it('Test #4: size - 5', () => {
    const size = 5
    const symbol = '*'
    const result = `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`
    expect(drawGift(size, symbol)).toStrictEqual(result)
  })

  it('Test #4: size - 10', () => {
    const size = 10
    const symbol = '%'
    const result = `         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
`
    expect(drawGift(size, symbol)).toStrictEqual(result)
  })
})
