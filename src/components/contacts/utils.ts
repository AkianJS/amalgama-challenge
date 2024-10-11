/* This function is used to truncate a string to a certain number of characters
@param str: string - The string to truncate
@param num: number - The number of characters to truncate the string to
@returns: string - The truncated string
*/
export const truncate = (str: string, num: number): string => {
   if (str.length <= num) {
      return str;
   }
   return str.slice(0, num) + '...';
};

/* This function is used to find an item by its id in an array
@param array: T[] - The array to search in
@param id: string - The id of the item to find
@returns: T | undefined - The item found or undefined if not found
*/
export const findById = <T extends { id: string }>(array: T[], id: string): T | undefined => {
   return array.find((item) => item.id === id);
};
