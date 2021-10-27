const greeting = (guest) => `Hello, ${guest}!`;

// declares a test suite
describe('greeting()', () => {
  // declare a test
  it('says hello', () => {
    // creates an assertion
    expect(greeting('Jest')).toBe('Hello, Jest!');  // a matcher
  });
});
