import { useEffect } from 'react';
import { useLibrary } from '../context/LibraryContext';

export function useLibraryData() {
   const { dispatch } = useLibrary();

   useEffect(() => {
      async function fetchData() {
         try {
            const [booksResponse, usersResponse] = await Promise.all([
               fetch('https://api.org/books'),
               fetch('https://api.org/users'),
            ]);

            const booksData = await booksResponse.json();
            console.log(booksData);
            const usersData = await usersResponse.json();

            dispatch({ type: 'SET_BOOKS', payload: booksData.response });
            dispatch({ type: 'SET_USERS', payload: usersData.response });
         } catch (error) {
            console.error('Error fetching library data:', error);
         }
      }

      fetchData();
   }, [dispatch]);
}
