/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {let singlePair = [];
  let maxPair = 0;

  // Sort clean pile.
  cleanPile = cleanPile.sort((a, b) => a - b);

  // Sort dirty pile.
  dirtypile = dirtyPile.sort((a, b) => a - b);

  // Loop through the clean pile to get maxium pairs.
  for (let i = 0; i < cleanPile.length; i++) {
    if (cleanPile[i] === cleanPile[i + 1]) {
      maxPair ++
      cleanPile.splice(i, 1)
    }
    else {
      singlePair.push(cleanPile[i]);
    }
  }

  // Loop through the single clean pair and check if the dirty pile contains the other pair.
  for (let i = 0; i < singlePair.length; i++) {
    if (dirtyPile.includes(singlePair[i]) && noOfWashes > 0) {
      dirtyPile.splice(i, 1);
      maxPair++
      noOfWashes--
    }
  }

  // Loop through dirty pile and check for possible pairs if number of washes left is greater than 1.
  for (let i = 0; i < dirtyPile.length; i++) {
    if (dirtyPile[i] === dirtyPile[i + 1] && noOfWashes > 1) {
      maxPair++
      noOfWashes -= 2
      dirtyPile.splice(i, 1);
    }
  }
  return maxPair;
}


module.exports = getMaxPairs;
