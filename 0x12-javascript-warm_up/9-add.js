#!/usr/bin/node
const myArgs = process.argv.slice(2);
let result = 0;
function add (a, b) {
  result = a + b;
  return result;
}
