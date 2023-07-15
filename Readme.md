# `We The People` ~ *Raise funds for anything and everything*
 
A website for raising funds for any social/non-social project. Users can create their projects to raise funds and contribute funds to others'/own projects.

 ## Features
 - User can create a new account.
 - User can log in/logout.
 - User can view the projects by filtering based on their categories.
 - User can view the project details, contributors' details, create a project or contribute to projects only after logging in. 
 - User can search for projects to find the contributions made to respective projects.
 - User can create a project for raising funds.
 - User can contribute funds to self/others' projects.
 - REST APIs built to handle the user requests for fetching project details, creating new projects & contributing to existing projects.
  
 ## Technologies used
 - MongoDB for the database.
 - React for the front end.
 - Nodejs/Express for the backend.
 - JWT token based authentication.

## API Endpoints 
- `/api/v1/auth/login` : for handling login functionality
- `/api/v1/auth/register` : for handling user registration
- `/api/v1/people/projects` : for listing all projects
- `/api/v1/people/project/:id` : for viewing project details further
- `/api/v1/people/contributors` : for the user to view contributors' details
- `/api/v1/book/contributeProject/:id` : for the user to contribute funds to any projects
- `/api/v1/book/createProject` : for the user to create any project to raise funds
- `/api/v1/book/contributeProject/:id` : for users find user contributions

## Deployment details
***`Demo Link:`*** https://aesthetic-frangipane-073db9.netlify.app/

Front-end deployed using `netlify.com`.

Back-end deployed using `render.com`.

## How to Deploy locally on your machine?
- Download the zip file of this repo.
- Unzip it and run `"npm install"` using the terminal inside the app & server folders to install all project dependencies.
- Create a `.env` file inside the src folder of the server. With the following details,
  - `MONGO_STRING="your_mongodb_url_with_credentials"`
  - `SECRET_KEY="keep_this_key_secret_and_lengthy"`
  - `PORT=3001`
- Replace the endpoints in axios calls of API inside the app folder with http://localhost:3001 URL (*provided backend is running on 3001 port*).
- Now run `"npm start"` in both the app & server folders.

## Challenges Faced
- User authentication using passport-local, hence replaced with JWT authentication
- Applying redux to reduce API calls

## Future plans
- Applying redux to reduce API calls.
- Autoset user's data for all forms within the site.
- Improve user interface and make it responsive for mobile view.


## Packages used
### Front-end
- npx create-react-app app
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
- npm install crypto-js
