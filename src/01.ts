import * as fs from 'fs';
import * as util from 'util'
const readFile = util.promisify(fs.readFile)
import { forStatement } from "@babel/types"

export function calcFuel(mass: number): number {
  return Math.max(Math.floor(mass / 3) - 2, 0)
}

export function calcFuelIncludingItsFuel(mass: number): number {
  if (mass === 0) return 0
  const fuel = calcFuel(mass)
  return fuel + calcFuelIncludingItsFuel(fuel)
}

export function calcSumOfFuelRequirements(moduleMasses: number[], calcFun: (mass: number) => number): number {
  return moduleMasses.reduce((sum, moduleMass) => {
    return sum + calcFun(moduleMass)
  }, 0)
}

async function readModuleMasses() {
  const fileContents = await readFile('data/01.txt', 'utf-8');
  const lines = fileContents.split('\n');
  const moduleMasses = lines.map(line => parseInt(line, 10));
  return moduleMasses;
}

async function part1() {
  const moduleMasses = await readModuleMasses();
  const fuel = calcSumOfFuelRequirements(moduleMasses, calcFuel)
  console.log(fuel)
}

async function part2() {
  const moduleMasses = await readModuleMasses();
  const fuel = calcSumOfFuelRequirements(moduleMasses, calcFuelIncludingItsFuel)
  console.log(fuel)
}

part1()
part2()

