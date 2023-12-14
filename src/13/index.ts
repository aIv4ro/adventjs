export function calculateTime (deliveries: string[]): string {
  const workingSeconds = 25_200
  const deliveriesSeconds = deliveries.reduce((acc, cur) => {
    const [hours, minutes, seconds] = cur.split(':').map(Number)
    return acc + hours * 3600 + minutes * 60 + seconds
  }, 0)
  const sign = deliveriesSeconds < workingSeconds ? '-' : ''
  const diffTime = Math.abs(deliveriesSeconds - workingSeconds)
  const hours = Math.floor(diffTime / 3600)
  const minutes = Math.floor((diffTime - hours * 3600) / 60)
  const seconds = diffTime - hours * 3600 - minutes * 60
  return sign + `${hours}:`.padStart(3, '0') +
    `${minutes}:`.padStart(3, '0') +
    `${seconds}`.padStart(2, '0')
}
