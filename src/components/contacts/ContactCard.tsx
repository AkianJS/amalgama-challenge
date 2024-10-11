import Image from 'next/image';
import { ContactCardProps } from './contacts.interface';
import Link from 'next/link';

export const ContactCard: React.FC<ContactCardProps> = ({
   id,
   avatarUrl,
   fullName,
   company,
   details,
   email,
   phoneNumber,
   addresses,
}) => {
   return (
      <Link href={`/contacts/${id}`} className="block">
         <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 shadow-lg rounded-lg p-6 mb-4 text-white">
            <div className="flex items-center mb-4">
               <Image
                  src={avatarUrl}
                  alt={fullName}
                  width={100}
                  height={100}
                  className="rounded-full mr-4 border-2 border-white shadow-md"
               />
               <div>
                  <h3 className="text-xl font-semibold text-white">{fullName}</h3>
                  <h4 className="text-pink-200">{company}</h4>
               </div>
            </div>
            <p className="text-indigo-100 mb-4">{details}</p>
            <ul className="space-y-2">
               <li>
                  <span className="font-semibold text-pink-200">Email:</span> {email}
               </li>
               <li>
                  <span className="font-semibold text-pink-200">Phone:</span> {phoneNumber}
               </li>
               <li>
                  <span className="font-semibold text-pink-200">
                     {addresses?.length > 1 ? 'Addresses:' : 'Address:'}
                  </span>
                  {addresses?.map((address, index) => (
                     <ul key={index} className="ml-4 mt-2 text-indigo-200">
                        <li>{address.line1}</li>
                        {address.line2 && <li>{address.line2}</li>}
                        <li>{address.zipCode}</li>
                        <li>{address.city}</li>
                        <li>{address.state}</li>
                     </ul>
                  ))}
               </li>
            </ul>
         </div>
      </Link>
   );
};

export default ContactCard;
