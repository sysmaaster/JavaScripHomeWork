/*
####Задача 1
Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

const Begin =new Array(1,2,3);
function Fun(i, arr){console.log(i+':' +' '+arr[i]);}

function myForEach(arr,Fun){
if (!Array.isArray(arr))
   throw new Error('Error:  1 parameter type should be an array');
if((typeof Fun !== "function"))
    throw new Error('Error:  2 parameter type should be a function');
for(i=0;i<arr.length;i++)
Fun(i,arr); 
}

myForEach(Begin,Fun);  