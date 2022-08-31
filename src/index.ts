import euler_1 from "./euler_1"
import euler_10 from "./euler_10"

function main() {
  let threshold

  threshold = 1000

  const sumOfMultiplies = euler_1(threshold)
  console.log(`The solution for euler_1 is ${sumOfMultiplies}`)

  threshold = 2 * 1e6

  const sumOfPrimes = euler_10(threshold)
  console.log(`The solution for euler_10 is ${sumOfPrimes}`)
}

main()
