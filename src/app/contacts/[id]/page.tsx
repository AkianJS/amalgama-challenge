import { notFound } from 'next/navigation';
import { ContactProfile } from '@/components/contacts/contact-profile';
import { Contact } from '@/components/contacts/contacts.interface';

async function getContact(id: string): Promise<Contact> {
   const res = await fetch(process.env.URL + '/api/contacts', {
      method: 'POST',
      body: JSON.stringify({ id }),
   });

   if (!res.ok) {
      throw new Error('Failed to fetch contact');
   }

   return res.json();
}

export default async function ContactPage({ params }: { params: { id: string } }) {
   let contact: Contact;

   try {
      contact = await getContact(params.id);
   } catch (error) {
      console.error('Error fetching contact:', error);
      notFound();
   }

   return (
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-2xl font-bold mb-6 text-center">Contact&apos;s Profile</h1>
         <ContactProfile {...contact} />
      </div>
   );
}
