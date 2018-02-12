const assert = require('assert');
const map = require('../lib/map');

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
    });
});