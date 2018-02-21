function every(array, callback){
    let ult = true;

    for(let i = 0; i < array.length; i++){
        if(callback(array[i]) != true){
            ult = false;
        }
    }
    return ult;
}

module.exports = every;