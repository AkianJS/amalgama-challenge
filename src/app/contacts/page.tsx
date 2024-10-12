import { ContactsScreen } from '@/components/contacts/ContactsScreen';
import { ContactsScreenProps } from '@/components/contacts/contacts.interface';
import { PORT } from '@/libs/constants';

export const dynamic = 'force-dynamic';

async function getContacts(): Promise<ContactsScreenProps> {
   const res = await fetch(PORT + '/api/contacts');
   if (!res.ok) {
      throw new Error('Failed to fetch contacts');
   }
   return res.json();
}

export default async function Contacts() {
   const { contacts, cities, states } = await getContacts();

   return <ContactsScreen contacts={contacts} cities={cities} states={states} />;
}
