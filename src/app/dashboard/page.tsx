'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const router = useRouter();

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
         router.push('/login');
      } else {
         setIsAuthenticated(true);
      }
   }, [router]);

   const handleLogout = () => {
      localStorage.removeItem('authToken');
      router.push('/login');
   };

   if (!isAuthenticated) {
      return null;
   }

   return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 text-white p-8">
         <h1 className="text-4xl font-bold mb-6 text-violet-400">Dashboard</h1>
         <p className="text-lg mb-8 text-gray-300">Welcome to the private route</p>
         <button
            onClick={handleLogout}
            className="bg-violet-600 text-white py-2 px-6 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.1)] hover:bg-violet-700 hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.1)] transition duration-300"
         >
            Logout
         </button>
      </div>
   );
}
