function reduce(array, callback, initialValue){
    let accum = 0;
    for(let i = 0; i < array.length; i++){
        accum = callback(accum, array[i], i);

    }
    return accum;


}

module.exports = reduce;