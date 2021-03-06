Array Methods
===

## Description

This is a solo assignment. Try and do these from scratch. 

Relevant info is in lab details below.

Implement select array methods from scratch. **Only use**:
* `array.length`
* `array[i] = value`
* `value = array[i]` 

**You must use TDD and good commits for this lab**

Some of the specs for the lab are less onerous than the entire JavaScript specification for the 
method (for example, no third `array` parameter). 

The "callback signature" refers to the parameter definition of the supplied callback function.

The instructions include how to handle array "holes". This is for the bonus part of the assignment.

## Methods to Implement

### Example: `forEach(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and calls that function for each item in the array.

Any holes in the array should be skipped (don't call the callback function).

Returns `undefined`.

### 1. `map(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and creates a new array with the return value of each called callback. 

Skips any holes in the array, and mapped array should have hole in same spot. The mapped array should have
the same `.length` value as the original array.

Returns the "mapped" new array.

### 2. `filter(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and creates a new array with all items whose callback returned `true` or a truthy value. 

Any holes in the array should be skipped (don't call the callback function).

Returns the new array of "filtered" items.

### 3. `findIndex(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and returns the index of the first item whose callback returns `true` or a truthy value.

Any holes in the array should be skipped (don't call the callback function).

Returns the index of the found item, `-1` if no item is found.

### 4. `every(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and returns an overall `true` value if **all** callback return `true` or a truthy value.

Any holes in the array should be skipped (don't call the callback function).

Returns the `true` if every item in the array has returned `true`, otherwise `false`.

### 5. `reduce(array, callback [, initialValue])`

Takes a callback of signature `(accumulator, item, index) => {}` and an (optional) 
second `initialValue` parameter that is the initial value of the accumulator. After each function
call, the return value is passed as the accumulator argument of the next function call.

If the second `initialValue` parameter is not supplied, the first function call should be the 
first item as the `accumulator`, and the second array item as the `item`.

Any holes in the array should be skipped (don't call the callback function).

Returns the final accumulator value.

## Rubric **10pts**
* Each test: *1pt* (x 5 = 5pts)
* Each function: *1pt* (x 5 = 5pts)

## Bonus

### Single index testing function

All of these methods have virtually the same implementation for testing whether the callback 
function was called with the correct index. Can you create a single function in your test file that
all of the index tests call to test index functionality?

### ADVANCED: Array Holes

This part of the lab is optional, but recommended if you want to push yourself. Do this part incrementally 
_after you have completed_ the primary requirements.

An array hole is a "not defined" index property on an array. For example, `const arr = [1,,3]` 
will have a "hole" meaning there is no index 1 defined for that array. 
This is different than `const arr = [1, undefined, 3]` because the array _will_ have an index 1 defined for 
the array, but it's value will be `undefined`.

You can best understand this by looking at the `console` output for the following arrays, 
one with holes, and one with the value `undefined` in each element of the array:

![image](https://cloud.githubusercontent.com/assets/478864/26217500/7e1a2c96-3bbc-11e7-9afb-0a5f51cb68c7.png)

The only way to check for a hole is to use `.hasOwnProperty(property)`:

![image](https://cloud.githubusercontent.com/assets/478864/26217549/a467d920-3bbc-11e7-9fb6-af2bcd470a52.png)
