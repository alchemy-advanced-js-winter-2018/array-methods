const assert = require('assert');
const forEach = require('../lib/for-each');

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

    
});
