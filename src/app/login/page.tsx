'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const router = useRouter();

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         router.push('/dashboard');
      }
   }, [router]);

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setError('');

      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      try {
         const response = await fetch(
            'https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login',
            {
               method: 'POST',
               body: formData,
            }
         );

         if (response.ok) {
            const { token } = await response.json();
            // Store token in localStorage
            localStorage.setItem('authToken', token);
            router.push('/dashboard'); // Redirect to a private route
         } else if (response.status === 401) {
            setError('Invalid email or password');
         } else {
            setError('An error occurred. Please try again.');
         }
      } catch (err) {
         setError('Network error. Please check your connection.');
         // eslint-disable-next-line no-console
         console.error(err);
      }
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="flex flex-col space-y-6 max-w-md mx-auto mt-8 p-8 bg-gray-800 rounded-2xl shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.7),inset_5px_5px_10px_rgba(255,255,255,0.1)]"
      >
         <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
               Email
            </label>
            <input
               id="email"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email"
               required
               className="px-4 py-3 bg-gray-700 text-white rounded-xl shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
         </div>
         <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-300">
               Password
            </label>
            <input
               id="password"
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter your password"
               required
               className="px-4 py-3 bg-gray-700 text-white rounded-xl shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
         </div>
         <button
            type="submit"
            className="bg-violet-600 text-white py-3 px-6 rounded-xl shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(255,255,255,0.1)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),inset_-5px_-5px_10px_rgba(255,255,255,0.1)] transition duration-300"
         >
            Login
         </button>
         {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </form>
   );
}
