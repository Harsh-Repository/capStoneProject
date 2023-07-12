# We The People: Raise funds for anything and everything
 
 The capstone project of KnowledgeHut-Upgrad FullStack WebDevelopment BootCamp.
 
 ## Features
 - user can create a new account
 - user can login/ logout
 - user can view the projects by filtering based on their categories
 - user can search for projects to find the contributions to respective projects
 - user can create a project for raising funds
 - user can contribute funds to self/other's projects
 - REST APIs built for handling the user requests for creating projects & contributing to projects
 - versioning of backend APIs

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
- show the current status of the funds received for a project
- hosting
- applying redux to reduce API calls
- imporve user interface

## Deployment details
Yet to deploy/host back-end.
Front-end is hosted at, https://aesthetic-frangipane-073db9.netlify.app/

## Challenges Faced
- user authentication using passport-local, hence replaced with JWT authentication
- applying redux to reduce API calls


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
