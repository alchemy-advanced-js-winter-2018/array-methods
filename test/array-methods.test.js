const assert = require('assert');
const forEach = require('../lib/for-each');
const map = require('../lib/map');

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

});
