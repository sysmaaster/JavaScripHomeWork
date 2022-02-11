/*
####Задача 3
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```*/

var Begin =new Array(1,2,3);
function Fun(arr){ 
    var Result=true;
    for(i=0;i<arr.length;i++) {
    if (arr[i]<2) {Result=false;break;}
    }
    console.log(Result);
}

function myEvery(arr,Fun){
if (!Array.isArray(arr))
   throw new Error('Error:  1 parameter type should be an array');
if((typeof Fun !== "function"))
    throw new Error('Error:  2 parameter type should be a function');
Fun(arr); 
}

myEvery(Begin,Fun); 