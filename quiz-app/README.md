#Cricket Quiz

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#####Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />
The page will reload if you make edits.<br />

`npm test`

Launches the test runner in the interactive watch mode.<br />

`npm run build`

Builds the app for production to the `build` folder.<br />

#####Modules used

- uses redux to store the state

- redux-logger middleware to log actions and states

- redux-saga middleware for serving async calls in redux actions

- redux-dev-tools browser extension can be used to debug redux store updates

- react-router-dom is used for page navigation

####Description

The application has two pages

######Login page

- Email and password is mandatory<br/>
- No real authentication check against password<br/>

######Quiz Page

- Set of questions about `Cricket`<br/>
- Options displayed in the form of `radio buttons`<br/>
- `Next` and `Previous` buttons for navigation<br/>
- Results page displaying correct answers and selected answers
