import * as fs from 'fs';
import * as util from 'util'
const readFile = util.promisify(fs.readFile)
import { forStatement } from "@babel/types"

export function calcFuelForModule(mass: number): number {
  return Math.floor(mass / 3) - 2
}

export function calcSumOfFuelRequirements(moduleMasses: number[]): number {
  return moduleMasses.reduce((sum, moduleMass) => {
    return sum + calcFuelForModule(moduleMass)
  }, 0)
}

part1()

async function part1() {
  const fileContents = await readFile('data/01.txt', 'utf-8')
  console.log(fileContents)
  const lines = fileContents.split('\n')
  const moduleMasses = lines.map(line => parseInt(line, 10))
  const fuel = calcSumOfFuelRequirements(moduleMasses)
  console.log(fuel)
}
