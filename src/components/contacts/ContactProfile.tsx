import Image from 'next/image';
import { Contact } from './contacts.interface';

export const ContactProfile: React.FC<Contact> = ({
   avatarUrl,
   firstName,
   lastName,
   company,
   details,
   email,
   phone,
   addresses,
}) => {
   const fullName = `${firstName} ${lastName}`;
   const phoneNumber = `${phone.areaCode}${phone.number}`;
   const primaryAddress = addresses[0];

   return (
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 shadow-lg rounded-lg p-8 text-white max-w-2xl mx-auto">
         <div className="flex flex-col items-center mb-6">
            <Image
               src={avatarUrl}
               alt={fullName}
               width={150}
               height={150}
               className="rounded-full mb-4 border-4 border-white shadow-lg"
            />
            <h2 className="text-3xl font-bold text-white">{fullName}</h2>
            <h3 className="text-xl text-pink-200">{company}</h3>
         </div>

         <div className="mb-6">
            <h4 className="text-lg font-semibold text-pink-200 mb-2">Detalles</h4>
            <p className="text-indigo-100">{details}</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
               <h4 className="text-lg font-semibold text-pink-200 mb-2">Información de contacto</h4>
               <ul className="space-y-2">
                  <li>
                     <span className="font-semibold text-pink-200">Email:</span> {email}
                  </li>
                  <li>
                     <span className="font-semibold text-pink-200">Teléfono:</span> {phoneNumber}
                  </li>
               </ul>
            </div>

            <div>
               <h4 className="text-lg font-semibold text-pink-200 mb-2">Dirección principal</h4>
               <address className="text-indigo-100 not-italic">
                  {primaryAddress.line1}
                  <br />
                  {primaryAddress.line2 && (
                     <>
                        {primaryAddress.line2}
                        <br />
                     </>
                  )}
                  {primaryAddress.cityId}, {primaryAddress.stateId} {primaryAddress.zipCode}
               </address>
            </div>
         </div>
      </div>
   );
};

export default ContactProfile;
