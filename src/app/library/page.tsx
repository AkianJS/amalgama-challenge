'use client';

import { useLibrary } from '@/context/LibraryContext';
import { useLibraryData } from '@/hooks/useLibraryData';

export default function LibraryPage() {
   useLibraryData(); // Load the library data when the component mounts
   const { state } = useLibrary();

   return (
      <div className="text-white">
         <h1 className="text-3xl font-bold mb-6 text-violet-400">Library App</h1>
         <h2 className="text-2xl font-semibold mb-4 text-violet-300">
            Books ({state.books.length})
         </h2>
         <ul className="space-y-2 mb-6">
            {state.books.map((book) => (
               <li key={book.id} className="bg-violet-800 rounded-lg p-3 shadow-md">
                  <span className="font-medium">{book.title}</span> by{' '}
                  <span className="text-violet-300">{book.author.name}</span>
               </li>
            ))}
         </ul>
         <h2 className="text-2xl font-semibold mb-4 text-violet-300">
            Users ({state.users.length})
         </h2>
         <ul className="space-y-2">
            {state.users.map((user) => (
               <li key={user.id} className="bg-violet-800 rounded-lg p-3 shadow-md">
                  <span className="font-medium">{user.nickname}</span> -{' '}
                  <span className="text-violet-300">{user.email}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}
