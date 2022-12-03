function distributeGifts(packOfGifts, reindeers) {
  const packOfGiftsWeight = packOfGifts.reduce((acc, cur) => acc + cur.length, 0);
  const reindeersCapacity = reindeers.reduce((acc, cur) => acc + (cur.length * 2), 0);
  console.log({packOfGiftsWeight, reindeersCapacity})
  return ~~(reindeersCapacity / packOfGiftsWeight);
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
const res = distributeGifts(packOfGifts, reindeers)
console.log(res);