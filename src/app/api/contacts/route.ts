import { NextRequest, NextResponse } from 'next/server';
import { ContactsScreenProps } from '@/components/contacts/contacts.interface';

const mockContactsData: ContactsScreenProps = {
   contacts: [
      {
         id: '1',
         avatarUrl: 'https://avatar.iran.liara.run/public/46',
         firstName: 'John',
         lastName: 'Doe',
         company: 'Tech Innovations Inc.',
         details: 'Senior Developer',
         email: 'john.doe@techinnovations.com',
         phone: {
            areaCode: '415',
            number: '5551234',
         },
         addresses: [
            {
               line1: '123 Main St',
               line2: 'Apt 4B',
               zipCode: '94105',
               cityId: 'sf',
               stateId: 'ca',
            },
         ],
      },
      {
         id: '2',
         avatarUrl: 'https://avatar.iran.liara.run/public/97',
         firstName: 'Jane',
         lastName: 'Smith',
         company: 'Design Masters LLC',
         details: 'UX Designer',
         email: 'jane.smith@designmasters.com',
         phone: {
            areaCode: '212',
            number: '5555678',
         },
         addresses: [
            {
               line1: '456 Park Ave',
               line2: 'Suite 789',
               zipCode: '10022',
               cityId: 'nyc',
               stateId: 'ny',
            },
         ],
      },
      {
         id: '3',
         avatarUrl: 'https://avatar.iran.liara.run/public/86',
         firstName: 'Alice',
         lastName: 'Johnson',
         company: 'Data Wizards Co.',
         details: 'Data Scientist',
         email: 'alice.johnson@datawizards.com',
         phone: {
            areaCode: '312',
            number: '5559876',
         },
         addresses: [
            {
               line1: '789 Lake St',
               line2: 'Floor 15',
               zipCode: '60601',
               cityId: 'chi',
               stateId: 'il',
            },
         ],
      },
   ],
   cities: [
      { id: 'sf', name: 'San Francisco' },
      { id: 'nyc', name: 'New York City' },
      { id: 'chi', name: 'Chicago' },
      { id: 'la', name: 'Los Angeles' },
      { id: 'hou', name: 'Houston' },
   ],
   states: [
      { id: 'ca', name: 'California' },
      { id: 'ny', name: 'New York' },
      { id: 'il', name: 'Illinois' },
      { id: 'tx', name: 'Texas' },
      { id: 'fl', name: 'Florida' },
   ],
};

export async function GET() {
   // Simulate a delay to mimic a real API call
   await new Promise((resolve) => setTimeout(resolve, 500));

   // Return all contacts
   return NextResponse.json(mockContactsData);
}

export async function POST(request: NextRequest) {
   // Simulate a delay to mimic a real API call
   await new Promise((resolve) => setTimeout(resolve, 500));

   // Get the ID from the request body
   const { id } = await request.json();

   if (id) {
      // If an ID is provided, find the corresponding contact
      const contact = mockContactsData.contacts.find((c) => c.id === id);

      if (contact) {
         return NextResponse.json(contact);
      } else {
         return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
      }
   } else {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
   }
}
