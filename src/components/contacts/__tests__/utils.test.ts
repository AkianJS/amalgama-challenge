import { truncate, findById } from '../utils';

describe('truncate', () => {
   it('should return the original string if it is shorter than the specified length', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
   });

   it('should truncate the string and add ellipsis if it is longer than the specified length', () => {
      expect(truncate('Hello, world!', 5)).toBe('Hello...');
   });

   it('should handle empty string', () => {
      expect(truncate('', 5)).toBe('');
   });
});

describe('findById', () => {
   const testArray = [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' },
      { id: '3', name: 'Charlie' },
   ];

   it('should return the item with the matching id', () => {
      expect(findById(testArray, '2')).toEqual({ id: '2', name: 'Bob' });
   });

   it('should return undefined if no item with the given id is found', () => {
      expect(findById(testArray, '4')).toBeUndefined();
   });

   it('should handle an empty array', () => {
      expect(findById([], '1')).toBeUndefined();
   });
});
