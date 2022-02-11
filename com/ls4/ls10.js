/*
####Задача 10
Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```*/

var Begin =new Array(1,2,3);
var New_arr =new Array();

  function myReverse(arr){
    if (!Array.isArray(arr))
       throw new Error('Error:  1 parameter type should be an array');
       for(i=2;i>=0;i--) {
        New_arr.push(arr[i]);
}
console.log(New_arr);
}

myReverse(Begin); 