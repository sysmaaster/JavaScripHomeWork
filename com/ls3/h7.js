
var arr = [];
function getDivisors(n) {
  try {
    if (typeof n == 'number') {
      if (n > 0) {
        for (let i = 1; i < n + 1; i++) {
          arr.push(i);
        }
      } else { throw new Error('parameter can\'t be a 0') }
    } else { throw new Error('parameter type is not a Number'); }
  } catch (e) {
    console.error(e.message)
  }
}

getDivisors(12);// [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0