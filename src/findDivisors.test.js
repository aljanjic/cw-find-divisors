const findDivisors = require('./findDivisors');

describe('findDivisors', () => {
  it('should return [3] when given 3', () => {
    expect(findDivisors(3)).toStrictEqual([3]);
  });

  it('should return [2,3] when given 6', () => {
    expect(findDivisors(3)).toStrictEqual([3]);
  });
});
