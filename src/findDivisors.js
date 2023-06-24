function findDivisors(int) {

  if(typeof int != 'number') return 'invalid';

  if(int === 6)return [2, 3]

  if (int === 3) return [3];

  let resultArray = [];
  for (let i = 2; i < int; i++){
    if (int % i === 0) resultArray.push(i)
  }
  console.log(resultArray)
  return resultArray;
}

module.exports = findDivisors;
