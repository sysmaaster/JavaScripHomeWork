/*
####Задача 1
Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

function f(n) {
    try {
        if (typeof n == 'number') {
            var sum = n * n * n;
            return sum;
        } else { throw new Error('Error: parameter type is not a Number'); }
    } catch (e) {
        console.error(e.message);
    }
}
f(2);
f('Content');