import { expect } from "chai"
import { fib } from "../src/fibonacci"

describe('Fibonacci', function () {
    const EXPECTED = 1
    const INPUT = 0
    it('should calculate the value at the given position', function () {
        [[0, 0], [1, 1], [2, 1], [3, 2], [4, 3]]
            .forEach((testCase) => {
                expect(testCase[EXPECTED]).to.equal(fib(testCase[INPUT]))
            })
    })
})