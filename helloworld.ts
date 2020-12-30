export {}
let message:string = "Hello Pradeep! How are you?" 
console.log(message)

/** Variable initialization */
let x = 10;
const y = 40;
/** const value cannot be changed and initialization is mandatory */
let sum;
sum = x + y;
sum = x + y + 1; 
/** but while using 'let' with variable initialization is not mandatory,
value can be modified at any time. */
console.log("sum is:"+sum);

let isEven:boolean = true;
let digit:number = 2;
/** Multi-line comment without concat(+) sign and Template literal indicated by the dollar sign and curly braces
 * backtick 
*/
let messageForPrime: string = `is ${digit} an even number? 
${isEven},it is.`
console.log(messageForPrime);
console.log(messageForPrime.big);