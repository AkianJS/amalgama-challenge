export const truncate = (str: string, num: number): string => {
   if (str.length <= num) {
      return str;
   }
   return str.slice(0, num) + '...';
};

export const findById = <T extends { id: string }>(array: T[], id: string): T | undefined => {
   return array.find((item) => item.id === id);
};
