export function checkIsValidCopy (original: string, copy: string): boolean {
  const regex = /[^A-Za-z]/
  const lcRegex = /[a-z]/
  const ucRegex = /[A-Z]/
  return [...original].every((char, i) => {
    const equal = char === copy[i]
    if (!equal && regex.test(char)) return false
    return (
      equal ||
      (ucRegex.test(char) &&
      (char.toLowerCase() === copy[i] || regex.test(copy[i]))) ||
      (lcRegex.test(char) && regex.test(copy[i]))
    )
  })
}
