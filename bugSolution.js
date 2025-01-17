function foo(a, b) {
  // Check if either a or b is falsy
  if (!a || !b) {
    return 0; // or NaN, depending on desired behavior
  } else {
    return a / b;
  }
}
console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // Infinity
console.log(foo(null, 1)); // 0
console.log(foo(1, false)); // 0
console.log(foo('',1)); //0
console.log(foo(1,'')); // Infinity