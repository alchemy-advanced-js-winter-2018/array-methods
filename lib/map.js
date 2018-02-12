function map(array, callback){
    const res = [];

    for(let i = 0; i < array.length; i++){
        const item = callback(array[i], i);
        res[i] = item;
    }
    return res;
}

module.exports = map;