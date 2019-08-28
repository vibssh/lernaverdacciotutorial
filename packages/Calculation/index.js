const add = require ('@vam/addition');
const sub = require('@vam/subtraction');

const a = add(4, 5);
const b = sub(10, 5);

const Calculation = () => {
  return a * b;
}

module.exports = Calculation;