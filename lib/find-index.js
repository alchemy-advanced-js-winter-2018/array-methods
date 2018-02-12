
// `findIndex(array, callback)`

// Takes a callback of signature `(item, index) => {}` 
// and returns the index of the first item whose callback returns `true` or a truthy value.

// Any holes in the array should be skipped (don't call the callback function).

// Returns the index of the found item, `-1` if no item is found.

function findIndex(array, callback) {
    let result = -1;
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i]) == true) {
            result = i;
        }
    }
    return result;
}

module.exports = findIndex;