
function f(n){
    try{
      if(typeof n == 'number'){
          var sum = n * n * n;
              return sum;
      }else{ throw new Error('Error: parameter type is not a Number');}
  }catch (e) {
    console.error(e.message);
  }
  }
  f(2);
  f('Content');