const assert = require('assert');
const forEach = require('../lib/for-each');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/find-index');
const every = require('../lib/every');
const reduce = require('../lib/reduce');

describe('array methods', () => {

    it('forEach', () => {
        let array = ['a', 'b', 'c'];
        let result = '';

        forEach(array, each => {
            result += each;
        });

        assert.equal(result, 'abc');
    });

    it('map', () => {
        let array = [1, 1, 1];
        let result = '';

        map(array, each => {
            result += (each + 'x');
        });
        
        result = result.split('');
        assert.deepEqual(result, ['1', 'x', '1', 'x', '1', 'x']);
    });

    it('filter', () => {
        let array = [1, 'x', 1, 1];
        let result = '';
        let n = 'x';

        filter(array, n, each => {
            if(each != n){
                result += (each);
            }
        });

        result = result.split('');
        assert.deepEqual(result, ['1', '1', '1']);
    });

    it('findIndex', () => {
        let array = ['0', '1', '2', 'hello!'];
        let n = 'hello!';

        const result = findIndex(array, (item, index) => {
            if(item === n){
                return true;
            }
        });

        assert.equal(result, 3);
    });

    it('every', () => {
        let array = [1, 2, 3, 4, 5];

        const result = every(array, (item, index) => {
            if(item < 6){
                return true;
            }
        });

        assert.equal(result, true);
    });

    it('reduce', () => {
        let array = [1, 2, 3, 4, 5];

        const result = reduce(array, (accumulator, item, index) => {
            accumulator = accumulator + item;
            return accumulator;
        });

        assert.equal(result, 15);
    });
});