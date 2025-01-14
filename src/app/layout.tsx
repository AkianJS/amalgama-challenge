import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navbar';
import { LibraryProvider } from '@/context/LibraryContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Amalgama Challenge',
   description: 'Amalgama Challenge',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Navigation />
            <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24">
               <LibraryProvider>{children}</LibraryProvider>
            </main>
         </body>
      </html>
   );
}
