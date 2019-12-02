import {calcFuelForModule} from '../src/01';
console.log("HI!")

describe('the fuel for a module', () => {
  it('of mass zero should be 0', () => {
    expect(calcFuelForModule(0)).toBe(0)
  })
})