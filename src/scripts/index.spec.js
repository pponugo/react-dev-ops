/* eslint-env mocha */
import { assert } from 'chai';
import index from './index';

describe('index', () => {
    it('place holder test', () => {
        assert.ok(index.Button, 'Button Component');
        assert.ok(index.List, 'Button Component');
    });
});
