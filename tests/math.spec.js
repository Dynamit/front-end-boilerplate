import * as module from '../src/assets/scripts/math';

describe('addition(): ', () => {
  it('can do addition', () => {
    const value = module.addition(2, 2);
    expect(value).toEqual(4);
  });
});

describe('subtraction(): ', () => {
  it('can do subtraction', () => {
    const value = module.subtraction(4, 2);
    expect(value).toEqual(2);
  });
});
