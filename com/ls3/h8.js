
var i = 0;
function f(m) {
    try {
        if (typeof m == 'object') {
            if (m.length > 0) {
                if (m[i] == undefined) {  return;  }
                console.log(m[i]);
                i++;
                f(m);

            } else { throw new Error('Error: parameter can\'t be an empty'); }
        } else { throw new Error('Error:parameter type should be an array'); }
    } catch (e) {
        console.error(e.message);
    }
}
f([1, 2, 3]);
f(1, 2, 3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty