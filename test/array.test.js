const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');

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

        const filtered = filter(array, (each, i) => {
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
});