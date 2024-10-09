import { ContactsScreen } from '@/components/contacts/contacts-screen';
import { ContactsScreenProps } from '@/components/contacts/contacts.interface';

async function getContacts(): Promise<ContactsScreenProps> {
   const res = await fetch(process.env.URL + '/api/contacts');
   if (!res.ok) {
      throw new Error('Failed to fetch contacts');
   }
   return res.json();
}

export default async function Contacts() {
   const { contacts, cities, states } = await getContacts();

   return <ContactsScreen contacts={contacts} cities={cities} states={states} />;
}
