import { formatDateTime } from '.';

describe('Datetime formatter', () => {
  it('Properly formats given UTC-like string', () => {
    expect(formatDateTime('2013-10-07T01:00:00Z')).toBe('Monday, October 7, 2013, 03:00');
    expect(formatDateTime('2017-03-30T22:27:00Z')).toBe('Friday, March 31, 2017, 24:27');
    expect(formatDateTime('2015-12-22T01:29:00Z')).toBe('Tuesday, December 22, 2015, 02:29');
  });
});
