/*
####Задача 9
Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```*/

var arr = [];

function arrayFill(a,b) { 
    if (typeof b != 'number') throw new Error('Error type b')
    else 
    if ((typeof a === 'number') || (typeof a === 'string')
    || (typeof a === 'object') || (!Array.isArray(arr)))
    {for (let i =0; i <= b-1; i++) 
        {
        arr[i] = a;
    }    
    console.log(arr)
}
    else {throw new Error('Error type b');}
}
arrayFill('x',5); 