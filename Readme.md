# We The People: Raise funds for anything and everything
 
 The capstone project of KnowledgeHut-Upgrad FullStack WebDevelopment BootCamp.
 
 ## Features
 - User can create a new account
 - User can login/ logout
 - User can view the projects by filtering based on their categories
 - User can search for projects to find the contributions to respective projects
 - User can create a project for raising funds
 - User can contribute funds to self/other's projects
 - REST APIs built for handling the user requests for creating projects & contributing to projects
 - Versioning of backend APIs

 ## Technologies used
 - MongoDB for database
 - React for front end
 - Nodejs/ Express for backend

## API Endpoints 
- /api/v1/auth/login : for handling login functionality
- /api/v1/auth/register : for handling user registration
- /api/v1/people/projects : for listing all projects
- /api/v1/people/project/:id : for viewing project details further
- /api/v1/people/contributors : for the user to view contributors' details
- /api/v1/book/contributeProject/:id : for the user to contribute funds to any projects
- /api/v1/book/createProject : for the user to create any project to raise funds
- /api/v1/book/contributeProject/:id : for users find user contributions


## Wishlist (desirable features)
- Applying redux to reduce API calls
- Autoset user's data for all forms within the site 
- Imporve user interface

## Deployment details
Demo Link: https://aesthetic-frangipane-073db9.netlify.app/

Front-end deployed using netlify.com

Back-end deployed using render.com

## How to Deploy locally on your machine?
- Download the zip file of this repo.
- Unzip it and run "npm install" inside the app & server folders to install all dependencies of the project.
- Create a .env file inside the src folder of the server. With the following details,

  -- MONGO_STRING="your_mongodb_url_with_credentials"

  -- SECRET_KEY="keep_this_key_secret_and_lengthy"

  -- PORT=3001

## Challenges Faced
- User authentication using passport-local, hence replaced with JWT authentication
- Applying redux to reduce API calls


## Packages used
### Front-end
- npx create-react-app app
- npm start
- npm install react-bootstrap bootstrap
- npm install bootstrap-icons
- npm install react-router-dom
- npm install axios
- npm install react-redux
- npm install @reduxjs/toolkit

### Back-end
- npm init
- npm install express
- npm install cors body-parser mongoose dotenv
- npm install -D nodemon
- npm install express-session
- npm install express-router
- npm install jsonwebtoken
- npm install express-router
- npm install jsonwebtoken
- npm install crypto-js
