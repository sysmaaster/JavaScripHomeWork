
function isEven(n) {
    try {
      if (typeof n == 'number') {
        if (n % 2 == 0) { return true } return false;
      } else { throw new Error('parameter type is not a Number'); }
  
    } catch (e) {
      console.error(e.message)
    }
  
  }
  
  isEven(3); // false
  isEven(4); // true
  isEven('Content'); // Error: parameter type is not a Number