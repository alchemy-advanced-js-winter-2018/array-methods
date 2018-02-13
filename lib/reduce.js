function reduce(array, callback, initialValue){
    
    let accum = initialValue;

    if(accum === undefined){
        accum = array[0];
    }

    for(let i = 0; i < array.length; i++){
        if(i === 0 && initialValue === undefined){
            i++;
        }
        accum = callback(accum, array[i]);
    }
    return accum;
}

module.exports = reduce;