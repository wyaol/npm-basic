import {transform} from '../src/romanizer.js';

describe('test', () => {
    it('should_transform', () => {
        const number = 10;
        const res = transform(number);
        expect(res).toEqual('X');
    });
});