import { max, convertNumberToMonth, compareFigure } from './hw4-2';

describe('max', () => {
  it('should work correct', () => {
    expect(max(2, 3)).toBe(3);
  });
});

describe('convertNumberToMonth', () => {
  it('should work correct', () => {
    expect(convertNumberToMonth(2)).toBe('Февраль');
  });
});

describe('compareFigure', () => {
  it('should work correct', () => {
    expect(compareFigure(25, 50)).toBe(true);
  });
});
