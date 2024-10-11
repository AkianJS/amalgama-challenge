'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
   return (
      <main className="container mx-auto p-4 text-white">
         <h1 className="text-2xl font-bold mb-4 text-violet-400">Welcome to Amalgama Challenge</h1>
         <div className="flex space-x-4">
            <Link
               href="/library"
               className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
               Go to Exercise 2
            </Link>
            <Link
               href="/login"
               className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
               Go to Exercise 3
            </Link>
         </div>
      </main>
   );
}
