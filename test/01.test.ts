import {calcFuelForModule, calcSumOfFuelRequirements} from '../src/01';

describe('the fuel for a module', () => {
  it('of mass 12 should be 2', () => {
    expect(calcFuelForModule(12)).toBe(2)
  })

  it('of mass 14 should be 2', () => {
    expect(calcFuelForModule(14)).toBe(2)
  })

  it('of mass 1969 should be 654', () => {
    expect(calcFuelForModule(1969)).toBe(654)
  })

  it('of mass 100756 should be 33583', () => {
    expect(calcFuelForModule(100756)).toBe(33583)
  })
})

describe('the sum of the fuel for a space craft', () => {
  it('with modules of mass 12 should be 2', () => {
    const modules = [12]
    expect(calcSumOfFuelRequirements(modules)).toBe(2)
  })

  it('with modules of mass 12, 14, 20 should be 8', () => {
    const modules = [12, 14, 20]
    expect(calcSumOfFuelRequirements(modules)).toBe(8)
  })
})