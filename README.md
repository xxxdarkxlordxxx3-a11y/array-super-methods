# Array Super Methods 🚀

A lightweight, zero-dependency JavaScript utility package that supercharges native JavaScript Arrays by adding highly requested utility methods directly to the `Array.prototype`.

---

## 📦 Installation & Setup

1. Copy the code into a file named `array-utils.js` (or `index.js`).
2. Import it at the very top of your main entry file (e.g., `index.js` or `app.js`):


```JavaScript
import './array-utils.js'; // This initializes the prototype methods globally
```
🛠️ Available Methods & Examples

1. numExport()
Filters the array and returns a new array containing only real numbers.

```JavaScript
const mixedArray = [1, "hello", 2, "world", 3, true];
const numbers = mixedArray.numExport();

console.log(numbers); 
// Output: [1, 2, 3]
```
2. removeRepeats()
Removes all duplicate values from the array and returns a unique set of elements.

```JavaScript
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = duplicates.removeRepeats();

console.log(unique); 
// Output: [1, 2, 3, 4, 5]
```
3. isEmpty()
Returns true if the array has no elements, and false otherwise.

```JavaScript
console.log([].isEmpty());     // Output: true
console.log([1, 2].isEmpty()); // Output: false
```
4. clearArray()
Empties the array instantly by modifying its length and returns 0.

```JavaScript
let items = ["apple", "banana", "orange"];
items.clearArray();

console.log(items); // Output: []
```
5. randomIndexNum()
Returns a single random element from the array based on its actual length. Returns undefined if empty.

```JavaScript
const names = ["Hamza", "Mahmoud", "Ali", "Ziad"];
const randomName = names.randomIndexNum();

console.log(randomName); 
// Output: (A random element from the names array)
```
