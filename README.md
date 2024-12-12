# Unexpected 'this' behavior in JavaScript

This repository demonstrates a common source of confusion in JavaScript: the `this` keyword.  The provided `bug.js` file contains a function where the value of `this` might not be what a developer initially expects. The solution, found in `bugSolution.js`, illustrates how to manage the `this` keyword effectively using various techniques such as binding or arrow functions.

## Understanding the Problem

In JavaScript, the value of `this` is determined by how the function is called.  This can lead to unexpected behavior if not handled properly. The example provided highlights one such case.

## Solution

The solution showcases different approaches to control the value of `this` within the function, ensuring predictable behavior. This includes binding using `.bind()` and using arrow functions.

## How to use
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to see the problem and its solutions.
3. Run these files in your preferred JavaScript environment to observe the output.