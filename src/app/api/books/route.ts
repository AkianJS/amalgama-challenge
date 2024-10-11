import { NextResponse } from 'next/server';

const books = {
   response: [
      {
         id: 1,
         title: 'Clean Code',
         author: {
            id: 1,
            name: 'Uncle Bob',
         },
      },
      {
         id: 2,
         title: 'Clean Architecture',
         author: {
            id: 1,
            name: 'Uncle Bob',
         },
      },
   ],
};

export async function GET() {
   return NextResponse.json(books);
}
