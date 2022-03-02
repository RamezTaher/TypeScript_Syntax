"use strict";
// Basic types
let id = 5;
let company = 'Ramez ben taher';
let isSexy = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'ramez'];
// Tuple
let person = [1, 'Ramez', true];
// Tuple Array
let employee;
employee = [
    [1, 'Ramez'],
    [2, 'Ilyes'],
    [3, 'saif'],
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "Up";
    Direction2["down"] = "Down";
    Direction2["left"] = "Left";
    Direction2["right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Ramez',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Ramez',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    registor() {
        return `${this.name} is registred`;
    }
}
const ramez = new Person(1, 'Ramez Taher');
const ilyes = new Person(2, 'Ilyes ben khalifa');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Ramez', 'Senior Developer');
console.log(emp.name);
console.log(emp.registor());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Ramez', 'Ilyes', 'Saif']);
