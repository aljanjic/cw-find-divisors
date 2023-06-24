# Notes

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

- ✅ 'should return [3] when given 3'
- ✅ 'should return [2,3] when given 6'
- ✅ 'should return "invalid" when given string'
- ✅ 'should return [3] when given 9'
- ⚠ TODO 'should return [2,4,5,10] when given 20'
- ⚠ TODO 'should return "13 is prime" when given 13'





Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

