import { useState, useEffect } from 'react';
import { useLibrary } from '@/context/LibraryContext';

// This hook fetches the library data from the API and sets the state in the LibraryContext
export function useLibraryData() {
   const { dispatch } = useLibrary();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      async function fetchData() {
         try {
            const [booksResponse, usersResponse] = await Promise.all([
               fetch('/api/books'),
               fetch('/api/users'),
            ]);

            const booksData = await booksResponse.json();
            const usersData = await usersResponse.json();

            // Save to localStorage
            localStorage.setItem('books', JSON.stringify(booksData.response));
            localStorage.setItem('users', JSON.stringify(usersData.response));

            dispatch({ type: 'SET_BOOKS', payload: booksData.response });
            dispatch({ type: 'SET_USERS', payload: usersData.response });

            setLoading(false);
         } catch (err) {
            setError(err instanceof Error ? err : new Error('An error occurred'));
            setLoading(false);
         }
      }

      fetchData();
   }, [dispatch]);

   return { loading, error };
}
