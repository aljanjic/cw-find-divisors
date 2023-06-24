const findDivisors = require('./findDivisors');

describe('findDivisors', () => {
  it('should return [3] when given 3', () => {
    expect(findDivisors(3)).toStrictEqual([3]);
  });

  it('should return [2,3] when given 6', () => {
    expect(findDivisors(6)).toStrictEqual([2, 3]);
  });

  it('should return "invalid" when given string', () => {
    expect(findDivisors('hello')).toStrictEqual('invalid');
  });

  it('should return [3] when given 9', () => {
    expect(findDivisors(9)).toStrictEqual([3]);
  });

  it('should return [2,4,5,10] when given 20', () => {
    expect(findDivisors(20)).toStrictEqual([2,4,5,10]);
  });

});
