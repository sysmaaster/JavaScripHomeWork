/*
#### Задача 10
Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!
- Не разрашается использовать специальные методы массивов.
*/

var arr = [6,5,4,3,2,1];
for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
            var swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
        }
    }
} 