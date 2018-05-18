console.warn('if you compare type javascript does adapt the types');
console.warn("5 == '5'");
var x = 5;
var y = '5';
var z = x == y;
console.log(z);

console.warn("This doesn't work if you compare with === because then the types are not adapted");
console.warn("5 === '5'");
z = x === y;
console.log(z);

console.warn("Logical operators");
console.warn("z = (3 < 5) && (3 > 0)");
x = 3;
y = 5;
z = (x < y) && (x > 0);
console.log(z);

console.warn("Operator precedence");
console.warn("&& is stronger than ||");
console.warn("false && true || true");
z = false && true || true; // && stronger than ||
console.log(z);

console.warn("Unary Operator");
console.warn("x > 4 ? 'Pass' : 'Fail'");
z = x > 4 ? 'Pass' : 'Fail';
console.log(z);
console.warn("x > 2 ? 'Pass' : 'Fail'");
z = x > 2 ? 'Pass' : 'Fail';
console.log(z);

console.warn("Logic operators with non Booleans");
console.warn("With && if the left side doesn't cohere to false, the right side is the result");
console.warn("true && 'apple'");
z = true && 'apple';
console.log(z);
console.warn("1 && 'apple'");
z = 1 && 'apple';
console.log(z);
console.warn("'1' && 'apple'");
z = '1' && 'apple';
console.log(z);
console.warn("false && 'apple'");
z = false && 'apple';
console.log(z);
console.warn("'banana' && 'apple'");
z = 'banana' && 'apple';
console.log(z);

console.warn("With || if the left side cohere to false, the right side is the result");
console.warn("undefined || 'apple'");
var fruit;
z = fruit || 'apple';
console.log(z);
console.warn("'' || 'apple'");
fruit = '';
z = fruit || 'apple';
console.log(z);
console.warn("'banana' || 'apple'");
fruit = 'banana'
z = fruit || 'apple';
console.log(z);

console.warn("null and undefined");
var i;
console.warn("undefined");
console.log(i);
console.warn("typeof undefined");
console.log(typeof i);
i = null;
console.warn("null");
console.log(i);
console.warn("typeof null");
console.log(typeof i);
