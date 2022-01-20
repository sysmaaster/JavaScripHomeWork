
function f(a, b, c) {
    try {
      if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
        return ((a - b) / c);
      } else {
        throw new Error('Error: parameter type is not a Number');
      }
  
    } catch (e) {
      console.error(e.message);
    }
  }
  
  f(9, 3, 2);    // 3
  f('s', 9, 3); // Error: all parameters type should be a Number