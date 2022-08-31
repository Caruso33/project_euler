// https://projecteuler.net/problem=10

export default function euler_10(threshold: number): number {
  const multipliesHash: Record<string, boolean> = {}
  const primes = []

  // using sieve of Eratosthenes
  // https://www.baeldung.com/cs/prime-number-algorithms#sieve-of-eratosthenes

  // starts with 2 as 1 is no prime by definition
  for (let index = 2; index < threshold; index++) {
    if (!(index in multipliesHash)) {
      // index is no multiply of another number, hence it's a prime
      primes.push(index)
    }

    // map all multipliers of index to use in future iterations
    let multiplier = 2
    while (index * multiplier < threshold) {
      multipliesHash[index * multiplier] = true

      multiplier++
    }
  }

  // calculating the sum
  const sumOfFoundMultiplies = primes.reduce((acc, inc) => {
    acc += +inc
    return acc
  }, 0)

  return sumOfFoundMultiplies
}
