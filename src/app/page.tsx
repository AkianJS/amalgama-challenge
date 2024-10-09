'use client';

import { useLibrary } from '../context/LibraryContext';
import { useLibraryData } from '../hooks/useLibraryData';

export default function Home() {
   useLibraryData(); // Load the library data when the component mounts
   const { state } = useLibrary();

   return (
      <main>
         <h1>Library App</h1>
         <h2>Books ({state.books.length})</h2>
         <ul>
            {state.books.map((book) => (
               <li key={book.id}>
                  {book.title} by {book.author.name}
               </li>
            ))}
         </ul>
         <h2>Users ({state.users.length})</h2>
         <ul>
            {state.users.map((user) => (
               <li key={user.id}>
                  {user.nickname} - {user.email}
               </li>
            ))}
         </ul>
      </main>
   );
}
