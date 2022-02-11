/*
####Задача 2
Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/

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
  
  
  