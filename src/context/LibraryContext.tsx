'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
type Author = {
   id: number;
   name: string;
};

type Book = {
   id: number;
   title: string;
   author: Author;
};

type FavoriteBook = Book & {
   favorited_at: string;
};

type User = {
   id: number;
   email: string;
   nickname: string;
   favorite_books: FavoriteBook[];
};

type LibraryState = {
   books: Book[];
   users: User[];
};

type LibraryAction =
   | { type: 'SET_BOOKS'; payload: Book[] }
   | { type: 'SET_USERS'; payload: User[] };

// Creating the context
const LibraryContext = createContext<
   | {
        state: LibraryState;
        dispatch: React.Dispatch<LibraryAction>;
     }
   | undefined
>(undefined);

// Reducer
function libraryReducer(state: LibraryState, action: LibraryAction): LibraryState {
   switch (action.type) {
      case 'SET_BOOKS':
         return { ...state, books: action.payload };
      case 'SET_USERS':
         return { ...state, users: action.payload };
      default:
         return state;
   }
}

// Provider component
export function LibraryProvider({ children }: { children: ReactNode }) {
   const [state, dispatch] = useReducer(libraryReducer, { books: [], users: [] });

   return <LibraryContext.Provider value={{ state, dispatch }}>{children}</LibraryContext.Provider>;
}

// Hook to access the context
export function useLibrary() {
   const context = useContext(LibraryContext);
   if (context === undefined) {
      throw new Error('useLibrary must be used within a LibraryProvider');
   }
   return context;
}
