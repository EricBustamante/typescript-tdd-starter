import { expect } from "chai"
import Sinon from "sinon"

describe('Example of mocking Date clock', function () {
    it('should use fix date for new Date', function () {
        const referenceDate = new Date('2015-03-14')
        Sinon.useFakeTimers(referenceDate)

        expect(new Date()).to.deep.equal(referenceDate)
    })
})