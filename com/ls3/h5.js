var arr = [1, 2, -4, 3, -9, -1, 7]; see = []; 

function isPositive(n) {
  try {
    if (typeof n == 'number') {
      if (n > 0) { return true } return false;
    } else { throw new Error('parameter type is not a Number'); }

  } catch (e) {
    console.error(e.message)
  }

}

arr.forEach(e => {
  if (isPositive(e)) {
    see.push(e)// [1, 2, 3, 7]
  }
});
