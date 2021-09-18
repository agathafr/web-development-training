/* Logical operators 
    && Logical "and" evaluates to true when both operands are true
    || Logical "or" evaluates to true when either operand is true
    !  Logical "not" evaluates to true if the operand is false 
*/

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 == 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // false
