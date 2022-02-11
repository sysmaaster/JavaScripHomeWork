/*
####Задача 8
Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.
Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
```*/


function f(arr){
    test1=arr;
    //console.log(arr);
    if (!Array.isArray(arr))
    throw new Error('Error: parameter type should be an array');
    if (!Array.isArray(arr[0]) && typeof arr[0] !== 'number') 
    throw new Error('Error: parameter type should be an array or number');
    if (Array.isArray(arr[0] ))//(typeof arr[0] !== 'number')  
    {   
        arr=arr.flat();
        f(arr);
    }
        else return test1;
 }

function f2(arr1){
f(arr1) ;
sum=0;
for(i=0;i<test1.length;i++) {
       sum+=test1[i];
}
console.log(sum);
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f2(arr); // 12
const arr2 = [[[[[1,2]]]]];
f2(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f2(arr3); // 6
const arr5 = [[[[[],3]]]];
f2(arr5); // 3
const arr4 = [[[[[]]]]];
f2(arr4); // 0
