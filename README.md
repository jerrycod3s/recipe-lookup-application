Taco recipe lookup application

A simple Express.js application that allows users to search for recipes by protein type.
This app reads recipe data from a local JSON file and render results using EJS templates.

---

Live Demo

https://recipe-lookup-application.onrender.com/

---

Features

- Server side rendering with EJS
- Reads and parse data from a local JSON file
- Form based recipe search
- Case insensitive matching
- Error handling for:
  - Recipes not found
  - JSON loading issues
- Uses EJS modules and async/await

---

Tech Stack

- Node.js
- Express.js
- EJS
- Javascript (ES Modules)
- Files system access via fs

---

Project Structure

.
|--- app.js
|--- data/
| |**_ recipes.json
|--- public/
|--- views/
| |_** index.ejs
|--- routes
| |**_ recipeRoutes.js
|--- services
| |_** recipeServices.js
|\_\_\_ package.json

---

Installation & Setup

1. Clone the repository:

https://github.com/jerrycod3s/recipe-lookup-application.git

2. Navigate into the project directory:

cd your-repo-name

3. Install dependencies:

npm install

4. Start the server:

node app.js

5. Open your browser and visit:

http://localhost:3000

---

What this project demonstrates

This project highlights:

- Working with external JSON data
- Parsing and validating server-side data
- Building Express routes for GET and post requests
- Clean separation of logic

---

How it works

1.  The server loads recipe data from recipes.json at startup.
2.  The user selects a protein.
3.  The server searches the JSON data for matching recipes.
4.  Results are rendered dynamically using EJS.

---

Future Improvements

- return multiple matching recipes instead of a single recipe
- Connect to a database instead of static JSON

---

Learning Goals
This project was built as part of learning:

- Backend fundamentals with Express
- Handling JSON data in Node.js
- Improving error handling
- Building small, structured server-side applications
