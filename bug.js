function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle other falsy values
  } else {
    return a / b;
  }
}
console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // Infinity
console.log(foo(null, 1)); // Uncaught TypeError: Cannot read properties of null (reading 'valueOf')
console.log(foo(1, false)); // Uncaught TypeError: Cannot convert undefined or null to object