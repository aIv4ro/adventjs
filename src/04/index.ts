export function decode (message: string): string {
  const regex = /\(([A-Za-z\s]+)\)/g
  const replaced = message.replace(regex, (_, group) => {
    return group.split('').reverse().join('')
  })
  return replaced.includes('(') ? decode(replaced) : replaced
}
