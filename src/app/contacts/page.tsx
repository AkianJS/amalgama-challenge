'use client';

import { useState, useEffect } from 'react';
import { ContactsScreen } from '@/components/contacts/ContactsScreen';
import { ContactsScreenProps } from '@/components/contacts/contacts.interface';

export default function Contacts() {
   const [contactsData, setContactsData] = useState<ContactsScreenProps | null>(null);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      async function fetchContacts() {
         try {
            const res = await fetch('/api/contacts');
            if (!res.ok) {
               throw new Error('Failed to fetch contacts');
            }
            const data = await res.json();
            setContactsData(data);
         } catch (err) {
            setError('An error occurred while fetching contacts');
            // eslint-disable-next-line no-console
            console.error(err);
         }
      }

      fetchContacts();
   }, []);

   if (error) {
      return <div>Error: {error}</div>;
   }

   if (!contactsData) {
      return <div>Loading...</div>;
   }

   const { contacts, cities, states } = contactsData;

   return <ContactsScreen contacts={contacts} cities={cities} states={states} />;
}
