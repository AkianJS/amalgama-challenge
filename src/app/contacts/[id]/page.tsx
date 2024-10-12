'use client';

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { ContactProfile } from '@/components/contacts/ContactProfile';
import { Contact } from '@/components/contacts/contacts.interface';

async function getContact(id: string): Promise<Contact> {
   const res = await fetch('/api/contacts', {
      method: 'POST',
      body: JSON.stringify({ id }),
   });

   if (!res.ok) {
      throw new Error('Failed to fetch contact');
   }

   return res.json();
}

export default function ContactPage() {
   const { id } = useParams();
   const [contact, setContact] = useState<Contact | null>(null);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      async function fetchContact() {
         try {
            const fetchedContact = await getContact(id as string);
            setContact(fetchedContact);
         } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Error fetching contact:', err);
            setError(err instanceof Error ? err : new Error('An error occurred'));
         }
      }

      fetchContact();
   }, [id]);

   if (error) {
      notFound();
   }

   if (!contact) {
      return <div>Loading...</div>;
   }

   return (
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-2xl font-bold mb-6 text-center">Contact&apos;s Profile</h1>
         <ContactProfile {...contact} />
      </div>
   );
}
