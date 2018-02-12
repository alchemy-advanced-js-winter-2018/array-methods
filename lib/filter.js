function filter(array, callback){
    const res = [];

    for(let i = 0; i < array.length; i++){
        const item = callback(array[i], i);
        if(item){
            res.push(array[i]);
        }
    }
    return res;
}

module.exports = filter;
