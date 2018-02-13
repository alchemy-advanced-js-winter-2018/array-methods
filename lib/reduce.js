function reduce(array, callback, initialValue){

    let accum = initialValue === undefined ? array[0] : initialValue;

    for(let i = 0; i < array.length; i++){
        if(i === 0 && initialValue === undefined){
            i++;
        }
        accum = callback(accum, array[i]);
    }
    return accum;
}





module.exports = reduce;