function findDivisors(int) {

  if(typeof int != 'number') return 'invalid';

  let resultArray = [];
  for (let i = 2; i < int; i++){
    if (int % i === 0) resultArray.push(i)
  }
  console.log(resultArray)
  return resultArray.length === 0 ? `${int} is prime` : resultArray;
}

module.exports = findDivisors;
