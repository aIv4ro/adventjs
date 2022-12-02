function wrapping(gifts) {
  return gifts.map(gift => {
    const cover = "*".repeat(gift.length + 2)
    const secondLine = `\n*${gift}*\n`;
    return cover.concat(secondLine, cover);
  })
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped);
