interface Contact {
   id: string;
   avatar_url: string;
   first_name: string;
   last_name: string;
   company: string;
   details: string;
   email: string;
   phone: {
      area_code: string;
      number: string;
   };
   addresses: Array<{
      line_1: string;
      line_2: string;
      zip_code: string;
      city_id: string;
      state_id: string;
   }>;
}

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
