// Basic types
let id: number = 5
let company: string = 'Ramez ben taher'
let isSexy: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5, 6]
let arr: any[] = [1, true, 'ramez']

// Tuple
let person: [number, string, boolean] = [1, 'Ramez', true]

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Ramez'],
  [2, 'Ilyes'],
  [3, 'saif'],
]

// Union
let pid: string | number
pid = 22

// Enum
enum Direction1 {
  up, // By default ordering 0 / 1 / 2 / 3
  down,
  left,
  right,
}

enum Direction2 {
  up = 'Up',
  down = 'Down',
  left = 'Left',
  right = 'Right',
}

// Object

type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'Ramez',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Ramez',
}

// type Point = number | string  We can't use interface with primitives or unions
// const p1: Point = 1

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  registor(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  registor() {
    return `${this.name} is registred`
  }
}

const ramez = new Person(1, 'Ramez Taher')
const ilyes = new Person(2, 'Ilyes ben khalifa')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Ramez', 'Senior Developer')

console.log(emp.name)
console.log(emp.registor())

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Ramez', 'Ilyes', 'Saif'])
