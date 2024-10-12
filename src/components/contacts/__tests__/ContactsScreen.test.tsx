import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactsScreen } from '../ContactsScreen';

const mockContacts = [
   {
      id: '1',
      avatarUrl: 'https://example.com/avatar1.jpg',
      firstName: 'John',
      lastName: 'Doe',
      company: 'Tech Co',
      details: 'Software Engineer',
      email: 'john@example.com',
      phone: { areaCode: '123', number: '4567890' },
      addresses: [
         {
            line1: '123 Main St',
            line2: 'Apt 4',
            zipCode: '12345',
            cityId: 'city1',
            stateId: 'state1',
         },
      ],
   },
];

const mockCities = [{ id: 'city1', name: 'New York' }];
const mockStates = [{ id: 'state1', name: 'New York' }];

describe('ContactsScreen', () => {
   it('renders contacts correctly', () => {
      render(<ContactsScreen contacts={mockContacts} cities={mockCities} states={mockStates} />);

      expect(screen.getByText('Contacts 👥')).toBeTruthy();
      expect(screen.getByText('John Doe')).toBeTruthy();
      expect(screen.getByText('Tech Co')).toBeTruthy();
      expect(screen.getByText('Software Engineer')).toBeTruthy();
   });

   it('displays correct number of contacts', () => {
      render(<ContactsScreen contacts={mockContacts} cities={mockCities} states={mockStates} />);

      const contactCards = screen.getAllByRole('link');
      expect(contactCards).toHaveLength(1);
   });
});
