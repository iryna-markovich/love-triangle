/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  
  for (let i = 0; i < preferences.length; i++) {
    let firstSpire = preferences[i];
    let secondSpire = preferences[firstSpire - 1];
    let thirdSpire = preferences[secondSpire - 1];
    if (thirdSpire === i + 1) {
      counter++;
    }
  }

  return Math.floor(counter / 3);
};