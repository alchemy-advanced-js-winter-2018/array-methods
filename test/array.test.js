const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/findIndex');
const every = require('../lib/every');
const reduce = require('../lib/reduce');

describe('array methods', () => {
    it('map', () => {
        const array = [2, 4, 6];

        const mapped = map(array, x => x + 1);

        assert.deepEqual(mapped, [3, 5, 7]);
    });

    it('map takes index as second argument', () => {
        const array = [2, 4, 6];

        const index = [];

        map(array, (each, i) => {
            index[i] = i;
        });

        assert.deepEqual(index, [0, 1, 2]);
    });

    it('filter', () => {
        const array = [3, 4, 6, 7];

        const filtered = filter(array, (each) => {
            if(each > 5){
                return true;
            }
            else {
                return false;
            }
        });
    
        assert.deepEqual(filtered, [6, 7]);
    });

    it('filter takes index as second argument', () => {
        const array = [1, 2, 3];

        const index = [];

        filter(array, (each, i) => {
            index[i] = i;
        });

        assert.deepEqual(index, [0, 1, 2]);
    });

    it('findIndex', () => {
        const array = ['a', 'b', 'c'];

        const ind = findIndex(array, (item) => {
            if(item === 'b'){
                return true;
            }
        });
        assert.equal(ind, 1);
        
    });

    it('findIndex takes index as second argument', () => {
        const array = ['a', 'b', 'c'];
        
        const index = [];

        findIndex(array, (item, index) => { 
            index[index] = index;
        });
        assert.deepEqual(index, []);
    });

    it('every', () => {
        const array = [1, 2, 3, 4];

        const result = every(array, (item) => {
            if(item > 0){
                return true;
            } else {
                return false;
            }
        });
        assert.equal(result, true);
    });

    it('every takes index as second argument', () => {
        const array = [1, 2, 3];

        let index = [];

        every(array, (item, i)=> {
            index[i] = i;
            return true;
        });
        assert.deepEqual(index, [0, 1, 2]);
    });

    it('reduce', () => {
        const array = [1, 2, 3, 4];

        const result = reduce(array, (acc, item) => { return acc += item;});

        assert.equal(result, 10);
    });

    //it('reduce takes index as second argument', () => {
    //    const array = [1, 2, 3];

    //    let index = [];

    //    reduce(array, (item, i)=> {
    //        index[i] = i;
    //    });
    //    assert.deepEqual(index, [0]);
    //});

});