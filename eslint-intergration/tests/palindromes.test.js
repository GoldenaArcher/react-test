const palindrome = require('../palindromes');

describe('palindrome()', () => {
  it('test for palindrome', () => {
    expect(palindrome('1001')).toBe('1001');
  });
});
