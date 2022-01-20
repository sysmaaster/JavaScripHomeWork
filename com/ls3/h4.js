
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