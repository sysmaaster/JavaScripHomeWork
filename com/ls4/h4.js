/*
####Задача 4
Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```*/

var Begin =new Array(1,2,3);
function Fun(arr){ 
    var Result=false;
    for(i=0;i<arr.length;i++) {
    if (arr[i]<2) {Result=true;break;}
    }
    console.log(Result);
}

function mySome(arr,Fun){
if (!Array.isArray(arr))
   throw new Error('Error:  1 parameter type should be an array');
if((typeof Fun !== "function"))
    throw new Error('Error:  2 parameter type should be a function');
Fun(arr); 
}

mySome(Begin,Fun); 