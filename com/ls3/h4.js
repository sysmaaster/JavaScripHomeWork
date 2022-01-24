/*
####Задача 4
Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

function f(day) {
    try {
      if (typeof day == 'number') {
        switch (day) {
          case 1: return "Понедельник";
          case 2: return "Вторник";
          case 3: return "Среда";
          case 4: return "Четверг";
          case 5: return "Пятница";
          case 6: return "Суббота";
          case 7: return "Воскресенье";
          default: throw new Error('parameter should be in the range of 1 to 7')
        }
      } else { throw new Error('parameter type is not a Number') }
    } catch (e) {
      console.error(e.message);
    }
  }
  
  f(1);
  f(8);//parameter should be in the range of 1 to 7
  f(7);
  f('1'); //parameter type is not a Number
  f(2);