1️⃣ Basic Level (Understanding & Identifying Types)
Declare variables for each primitive type in JavaScript: string, number, boolean, null, undefined, bigint, symbol — log each with typeof.

Create a variable with a string value "123". Convert it to a number and log the type.

Check the result of typeof null. Explain why it’s not "null".

What will typeof NaN return? Prove it with code.

Create an object and an array. Show how typeof behaves for both.

2️⃣ Intermediate Level (Type Conversion & Coercion)
Convert the string "true" into a boolean.

Convert the number 0 into a boolean. Do the same for 1.

Show what happens when you add a number to a string.

Show the result of "5" - 2. Explain why.

Use Number(), String(), and Boolean() functions to convert the same value ("0") into all three types — log the results.

3️⃣ Advanced Level (Comparisons & Type Behavior)
Compare == vs === for:

0 and false

"0" and 0

null and undefined

Show how Object.is() differs from === when comparing NaN and -0.

Write code to check if a value is an array without using typeof.

Demonstrate what happens if you do [] + [], [] + {}, and {} + {}.

Show what happens when you call .toString() on a number and on null.

4️⃣ Pro Level (Type System Edge Cases & Tricks)
Write a function isPrimitive(value) that returns true if the value is a primitive type.

Demonstrate how JavaScript’s dynamic typing allows you to change the type of a variable at runtime.

Show an example where implicit type coercion causes unexpected behavior — then fix it.

Create an object with a custom valueOf() method and show how it affects arithmetic.

Implement a type checker function that returns one of: "string", "number", "boolean", "null", "undefined", "symbol", "bigint", "object", "array", "function".

