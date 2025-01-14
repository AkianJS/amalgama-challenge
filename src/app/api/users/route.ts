import { NextResponse } from 'next/server';

const users = {
   response: [
      {
         id: 1,
         email: 'chano@amalgama.co',
         nickname: 'Chano',
         favoriteBooks: [
            {
               id: 1,
               title: 'Clean Code',
               favoritedAt: '2024-01-01',
               author: {
                  id: 1,
                  name: 'Uncle Bob',
               },
            },
         ],
      },
      {
         id: 2,
         email: 'sebastian@amalgama.co',
         nickname: 'Biche',
         favoriteBooks: [
            {
               id: 1,
               title: 'Clean Code',
               favoritedAt: '2024-06-30',
               author: {
                  id: 1,
                  name: 'Uncle Bob',
               },
            },
            {
               id: 2,
               title: 'Clean Architecture',
               favoritedAt: '2024-12-31',
               author: {
                  id: 1,
                  name: 'Uncle Bob',
               },
            },
         ],
      },
   ],
};

export async function GET() {
   return NextResponse.json(users);
}
