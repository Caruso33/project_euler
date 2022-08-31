// https://projecteuler.net/problem=1

export default function euler_1(threshold: number): number {
  const multipliesToCheckFor = [3, 5]
  const foundMultiplies = []

  // natural numbers start with 1..
  for (let index = 1; index < threshold; index++) {
    if (
      // logic to find multiplies
      multipliesToCheckFor.some(
        (multiplyNumber) => index % multiplyNumber === 0
      )
    ) {
      foundMultiplies.push(index)
    }
  }

  // calculating the sum
  const sumOfFoundMultiplies = foundMultiplies.reduce((acc, inc) => {
    acc += inc
    return acc
  }, 0)

  return sumOfFoundMultiplies
}
