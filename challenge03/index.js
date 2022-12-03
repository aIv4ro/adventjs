const distributeGifts = (packOfGifts, reindeers) => {
  const packOfGiftsWeight = packOfGifts.join("").length;
  const reindeersCapacity = reindeers.join("").length * 2;
  return ~~(reindeersCapacity / packOfGiftsWeight);
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
const res = distributeGifts(packOfGifts, reindeers)
console.log(res);