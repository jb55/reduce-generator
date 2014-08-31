'use strict';

let isGeneratorFunction = require('is-generator-function');

module.exports = reduceGeneratorFn;

function reduceGeneratorFn(gen, reducer, acc){
  let first = true;
  let prev = acc;
  gen = isGeneratorFunction(gen)? gen() : gen;

  for (let x of gen) {
    if (first) {
      first = false;
      if (arguments.length < 3) {
        prev = x;
        continue;
      }
    }
    prev = reducer(prev, x)
  }

  return prev;
}
