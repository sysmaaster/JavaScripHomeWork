/*
####Задача 6
Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```*/

var Begin =new Array(1,2,3);
  const Acc = 0;

  function Fun(arr){ 
    var Result=Acc;
    for(i=2;i>=0;i--) {
               Result+=arr[i];
    }
    console.log(Result);
}

  function myReduceRight(arr,Fun,acc){
    if (!Array.isArray(arr))
       throw new Error('Error:  1 parameter type should be an array');
    if((typeof Fun !== "function"))
        throw new Error('Error:  2 parameter type should be a function');
    if((typeof acc !== "number") )
    throw new Error('Error:  3 parameter type should be a number');
    Fun(arr); 
}

myReduceRight(Begin,Fun,Acc); 