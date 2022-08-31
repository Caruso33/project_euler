import euler_1 from "../src/euler_1"
import { assert } from "chai"

describe("Euler 1", () => {
  it("takes an argument as the threshold", () => {
    const threshold = 10

    assert.doesNotThrow(() => euler_1(threshold))
  })
})
