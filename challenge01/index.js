const wrapping = (gifts) => {
  return gifts.map(gift => {
    const cover = "*".repeat(gift.length + 2);
    return `${cover}\n*${gift}*\n${cover}`;
  })
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped);
