import euler_1 from "../src/euler_1"
import { assert } from "chai"

describe("Euler 1", () => {
  it("takes an argument as the threshold", () => {
    const threshold = 10

    assert.doesNotThrow(() => euler_1(threshold))
  })

  it("returns a single number as result", () => {
    const threshold = 10

    assert.isNumber(euler_1(threshold))
  })

  it("finds sum of all multiplies of 3 and 5 which are below 10", () => {
    const threshold = 10

    const sumOfMultiplies = euler_1(threshold)

    assert(sumOfMultiplies == 23, "Wrong result provided. Logic incorrect.")
  })
})
