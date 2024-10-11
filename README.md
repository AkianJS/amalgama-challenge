# Welcome to Amalgama Challenge

## How to run the project

You can try the project in the following link: https://amalgama-challenge.vercel.app/

Or you can run the project locally by following these steps:

1. Clone the repository
2. Install docker (For windows use Docker Desktop and install WSL2)
3. Run `docker compose up`

The project will be available at `http://localhost:3000`, be sure that the port is available.

### Solutions

1. Exercise 1:
   1.1 Some problems that I've found are:

-  Some functions were not implemented.
-  Navigation and contacts logic were in the same file.
-  The page was not spliting the logic into components.
-  Array.map was used without a key.

1.2 The refactored code is under the folder `src/components/contacts`.

1.3 Some improvements after the refactoring:

-  The page was splited into components.
-  The logic was separated from the navigation.
-  The use of keys was added.

All of this makes the code more readable and easier to maintain. As well as solving the problems mentioned before,
like the use of keys, which is a problem that lead react to not understand which items need to be changed or which ones
are having an interaction.

1.4 The view of a contact is under the folder `src/components/contacts` with the name `ContactProfile.tsx`.
You can try it by clicking on a contact card. It will use the Next.js router to navigate to the contact profile page.

2. Exercise 2:

> Note: I didn't understand completely this exercise

2.1 I've created a custom hook to fetch the library data from the API and set the state in the context.
The context is in the file `src/context/LibraryContext.tsx`.
Also, I saved the data in the localStorage to avoid extra requests to the API.

2.2 I didn't get this point about the "json" file. I attached the json under `src/books.json`.

2.3 The state management solution brings some benefits like:

-  Avoid extra requests to the API.
-  Have the data always available across the application.
-  Easier to manage the data.

3. Exercise 3:

3.1 The view for the login is under the `/login` route, with the corresponding validation.
You can see the file under `src/app/login/page.tsx`.

3.2 After login, the user is redirected to the `/dashboard` route.
You can see the file under `src/app/dashboard/page.tsx`.
