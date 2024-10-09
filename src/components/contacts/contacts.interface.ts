export interface Contact {
   id: string;
   avatarUrl: string;
   firstName: string;
   lastName: string;
   company: string;
   details: string;
   email: string;
   phone: {
      areaCode: string;
      number: string;
   };
   addresses: {
      line1: string;
      line2: string;
      zipCode: string;
      cityId: string;
      stateId: string;
   }[];
}

export type ContactCardProps = Omit<Contact, 'firstName' | 'lastName' | 'phone' | 'addresses'> & {
   fullName: string;
   phoneNumber: string;
   addresses: {
      line1: string;
      line2?: string;
      zipCode: string;
      city?: string;
      state?: string;
   }[];
};

interface City {
   id: string;
   name: string;
}

interface State {
   id: string;
   name: string;
}

export interface ContactsScreenProps {
   contacts: Contact[];
   cities: City[];
   states: State[];
}
