const assert = require('assert');
const forEach = require('../lib/for-each');
const map = require('../lib/map');
const filter = require('../lib/filter');


describe('array methods', () => {

    // function testindexes(){};

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

    it('filter', () => {
        const array = [4, 5, 6, 7, 8, 9];

        const filtered = filter(array, x => x > 5);

        assert.deepEqual(filtered, [6, 7, 8, 9]);
    });
});
