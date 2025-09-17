'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = (...numbers) => {
    if (numbers.length) {
      amount += numbers.reduce((acc, number) => acc + number, 0);

      return adder;
    }

    const currentSum = amount;

    amount = 0;

    return currentSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
