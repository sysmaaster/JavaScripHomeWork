
function f(...n) {
    try {
      var sum = 0;
      n.forEach(function (ns) {
        if (typeof ns == 'number') {
          sum = sum + ns
        } else {
          throw new Error('Error: parameter type is not a Number');
        }
      });
      return sum;
  
    } catch (e) {
      console.error(e.message);
    }
  }
  
  f(1, 2, 3); // 6
  f(1, 1, 1, 1, 1, 1, 1, 1); // 8
  f(1, 2, 's', 4); // Error: all parameters type should be a Number
  
  
  