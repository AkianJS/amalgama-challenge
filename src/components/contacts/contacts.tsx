import React from 'react';
import Image from 'next/image';
import { ContactsScreenProps } from './contacts.interface';
import { findById, truncate } from './utils';

export const ContactsScreen: React.FC<ContactsScreenProps> = ({ contacts, cities, states }) => {
   const contactsToDisplay = contacts.map((contact) => ({
      id: contact.id,
      avatarUrl: contact.avatar_url,
      fullName: `${contact.first_name} ${contact.last_name}`,
      company: contact.company,
      details: truncate(contact.details, 100),
      email: contact.email,
      phoneNumber: `(${contact.phone.area_code}) ${contact.phone.number}`,
      addresses: contact.addresses.map((address) => ({
         line1: address.line_1,
         line2: address.line_2,
         zipCode: address.zip_code,
         city: findById(cities, address.city_id)?.name,
         state: findById(states, address.state_id)?.name,
      })),
   }));

   return (
      <div>
         <nav>
            <ul>
               <li>
                  <a href="/home">Home</a>
               </li>
               <li>
                  <a href="/contacts">My Contacts</a>
               </li>
            </ul>
         </nav>
         <h1>Contacts 👥</h1>
         {contactsToDisplay.map((contact) => (
            <div key={contact.id}>
               <div>
                  <Image src={contact.avatarUrl} alt={contact.fullName} width={100} height={100} />
                  <h3>{contact.fullName}</h3> - <h4>{contact.company}</h4>
               </div>
               <p>{contact.details}</p>
               <ul>
                  <li>email: {contact.email}</li>
                  <li>phone: {contact.phoneNumber}</li>
                  <li>
                     {contact.addresses.length > 1 ? <h4>Addresses:</h4> : <h4>Address:</h4>}
                     {contact.addresses.map((address, index) => (
                        <ul key={index}>
                           <li>{address.line1}</li>
                           <li>{address.line2}</li>
                           <li>{address.zipCode}</li>
                           <li>{address.city}</li>
                           <li>{address.state}</li>
                        </ul>
                     ))}
                  </li>
               </ul>
            </div>
         ))}
      </div>
   );
};
