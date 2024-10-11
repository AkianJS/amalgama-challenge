import React from 'react';
import { ContactsScreenProps } from './contacts.interface';
import { findById, truncate } from './utils';
import { ContactCard } from './ContactCard';

export const ContactsScreen: React.FC<ContactsScreenProps> = ({ contacts, cities, states }) => {
   const contactsToDisplay = contacts.map((contact) => ({
      id: contact.id,
      avatarUrl: contact.avatarUrl,
      fullName: `${contact.firstName} ${contact.lastName}`,
      company: contact.company,
      details: truncate(contact.details, 100),
      email: contact.email,
      phoneNumber: `(${contact.phone.areaCode}) ${contact.phone.number}`,
      addresses: contact.addresses.map((address) => ({
         line1: address.line1,
         line2: address.line2,
         zipCode: address.zipCode,
         city: findById(cities, address.cityId)?.name,
         state: findById(states, address.stateId)?.name,
      })),
   }));

   return (
      <div className="w-full">
         <h1 className="text-2xl font-bold">Contacts 👥</h1>
         <div className="responsive-grid">
            {contactsToDisplay.map((contact) => (
               <ContactCard key={contact.id} {...contact} />
            ))}
         </div>
      </div>
   );
};
