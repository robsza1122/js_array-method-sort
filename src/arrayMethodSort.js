'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;

    const compareFunctionHelper =
      compareFunction ||
      ((a, b) => {
        const aString = String(a);
        const bString = String(b);

        const aCode = aString.charCodeAt(0);
        const bCode = bString.charCodeAt(0);

        if (aCode < bCode) {
          return -1;
        }

        if (aCode > bCode) {
          return 1;
        }

        return aString.localeCompare(bString);
      });

    for (let i = 0; i < array.length; i++) {
      for (let y = i + 1; y < array.length; y++) {
        if (compareFunctionHelper(array[i], array[y]) > 0) {
          const result = array[i];

          array[i] = array[y];
          array[y] = result;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
