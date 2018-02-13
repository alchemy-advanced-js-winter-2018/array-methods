function reduce(array, callback, initialValue){
    let accum;

    if(initialValue === undefined){
        accum = array[0];
    } else {
        accum = initialValue;
    }

    
    for(let i = 0; i < array.length; i++){
        if(initialValue === undefined && i === 0){
            i++;
        }
        accum = callback(accum, array[i], i);
    }
    return accum;
}


module.exports = reduce;