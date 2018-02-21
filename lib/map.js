function map(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}

module.exports = map;