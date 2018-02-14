function reduce(array, callback, init) {
    var accum;
    if(init === undefined){
        accum = array[0];
    } else {
        accum = init;
    }
    for(let i = 0; i < array.length; i++) {
        if(init === undefined && i === 0) {
            i = 1;
        }
        accum = callback(accum, array[i], i);
    }
    return accum;
}

module.exports = reduce;