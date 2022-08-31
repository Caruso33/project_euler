import { hello } from "../src/euler_1"
import { expect } from "chai"

describe("Euler 1", () => {
  // the tests container
  it("checking return", () => {
    // the single test
    const arg = "Bob"

    const helloReturn = hello(arg)

    expect(helloReturn).to.equal(`Hello ${arg}!`)
  })
})
