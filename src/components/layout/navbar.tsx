import Link from 'next/link';

export default function Navigation() {
   return (
      <nav className="bg-gray-800 p-4 sticky top-0 z-50">
         <ul className="flex space-x-4">
            <li>
               <Link href="/" className="text-white hover:text-gray-300 transition duration-300">
                  Home
               </Link>
            </li>
            <li>
               <Link
                  href="/contacts"
                  className="text-white hover:text-gray-300 transition duration-300"
               >
                  Contacts
               </Link>
            </li>
         </ul>
      </nav>
   );
}
