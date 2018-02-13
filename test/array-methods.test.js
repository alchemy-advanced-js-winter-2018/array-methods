const assert = require('assert');
const forEach = require('../lib/for-each');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/find-index');
const every = require('../lib/every');
const reduce = require('../lib/reduce');


describe('array methods', () => {

    it('forEach', () => {
        const array = ['1', '2', '3'];

        let result = '';

        forEach(array, i => {
            result += i;
        });

        assert.equal(result, '123');
    });


    it('map', () => {
        const array = [1, 2, 3];

        const mapped = map(array, x => x + 1);

        assert.deepEqual(mapped, [2, 3, 4]);
    });


    it('map length', () => {
        const array = [1, 2, 3];

        const mapped = map(array, x => x + 1);

        assert.deepEqual(mapped.length, 3);
    });


    it('filter', () => {
        const array = [4, 5, 6, 7, 8, 9];

        const filtered = filter(array, x => x > 5);

        assert.deepEqual(filtered, [6, 7, 8, 9]);
    });


    it('findIndex', () => {
        const array = [1, 2, 3, 4, 5];

        const result = findIndex(array, (item, index) => {
            
            if(item === 5) {
                return true;
            }
        });

        assert.equal(result, 4);
    });


    it('findIndex with item not present', () => {
        const array = [1, 2, 3, 4, 5];

        const result = findIndex(array, (item, index) => {
            
            if(item === 6) {
                return true;
            }
        });

        assert.equal(result, -1);
    });


    it('every', () => {
        const array = [1, 2, 3, 4, 5];

        const result = every(array, (item, index) => {
           
            if(item > 0) {
                return true;
            } else {
                return false;
            }
        });

        assert.equal(result, true);
    });


    it('every for false', () => {
        const array = [1, 2, 3, 4, 5];
        
        const result = every(array, (item, index) => {
            
            if(item < 0) {
                return true;
            } else {
                return false;
            }
        });

        assert.equal(result, false);
    });


    it('reduce', () => {
        const array = [1, 2, 3, 4, 5];
        
        const result = reduce(array, (sum, num, i)  => {
            return sum + num;
        });
        
        assert.equal(result, 15);
    });


    it('reduce for multiplication', () => {
        const array = [1, 2, 3, 4, 5];
        
        const result = reduce(array, (acc, num, i)  => {
            return acc * num;
        });
        
        assert.equal(result, 120);
    });


    it('reduce with initializer', () => {
        const array = [1, 2, 3, 4, 5];
        
        const result = reduce(array, (sum, num, i)  => {
            return sum + num;
        }, 5);
        
        assert.equal(result, 20);
    });
});
