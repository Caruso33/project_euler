import euler_10 from "../src/euler_10"
import { assert } from "chai"

describe("Euler 10", () => {
  it("takes an argument as the threshold", () => {
    const threshold = 10

    assert.doesNotThrow(() => euler_10(threshold))
  })

  it("returns a single number as result", () => {
    const threshold = 10

    assert.isNumber(euler_10(threshold))
  })

  it("finds sum of all primes which are below 10", () => {
    const threshold = 10

    const sumOfPrimes = euler_10(threshold)

    assert(
      sumOfPrimes == 17,
      `Wrong result provided. Logic incorrect. Is ${sumOfPrimes} should be 17.`
    )
  })

  it("finds sum of all primes which are below 2mil", () => {
    const threshold = 2 * 1e6

    const sumOfPrimes = euler_10(threshold)
    console.log(`The solution for euler_10 is ${sumOfPrimes}`)
  })
})
