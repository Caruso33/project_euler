import euler_10 from "../src/euler_10"
import { assert } from "chai"

describe("Euler 10", () => {
  it("takes an argument as the threshold", () => {
    const threshold = 10

    assert.doesNotThrow(() => euler_10(threshold))
  })
})
