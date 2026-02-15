##Question from assignment

- ***1. What is the difference between null and undefined?***  
If the value of a property does not exist, it means the property has an empty reference, which is `null`. On the other hand, `undefined` means it has a reference but no value is set. 
Example:

```javascript
const data;  
Here, the value of data is not set, so it is undefined. null means the value does not exist.
```


- ***2.  What is the use of the map() function in JavaScript? How is it different from forEach()?***  
In JavaScript, the map() function can iterate over an array and return a new array with the results.
The forEach() function can also iterate and perform operations, but it does not return any value.


- ***3. What is the difference between == and ===?***  
Double equal == checks only values and performs type coercion if necessary.
On the other hand, triple equal === is strict — it checks both value and type.
If both match, it returns true; otherwise, it returns false.


- ***4. What is the significance of async/await in fetching API data?***  
async/await is used to maintain the order of code execution when dealing with promises.

Example analogy:
If we eat first and then wash our hands, it's non-serial. But async/await enforces order — first, you wash your hands, then you eat.

Similarly, in code, if a program encounters a promise, the next line will not execute until the promise is resolved, ensuring proper sequential execution.

- ***5.  Explain the concept of Scope in JavaScript (Global, Function, Block).***  
Global scope: Variables declared in the global scope can be accessed by any function or method anywhere in the program.

Function scope: Variables declared inside a function are limited to that function only, unlike global scope.

Block scope: Variables declared with let or const inside a block {} are limited to that block, similar to function scope but smaller in area.
