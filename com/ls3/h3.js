/*
####Задача 3
Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
*/

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