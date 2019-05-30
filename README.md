# Hotel Challenge

Your challenge is to create a database and web API for a hotel booking system, which implements the following requirements:

## Requirements

- Users should be able to sign up to the system with a name and email address

- Hotels should be able to register with a name, address and email address

- Users should be able to make bookings at hotels

- Bookings have a start data and an end date

- Bookings must be accepted by the hotel

- To prevent overbooking, hotels should specify the number of rooms that they have

- If a booking is requested and all the rooms in a hotel are booked on any of requested the nights, do not allow the booking to be made

- Hotels can set exceptions for days where they have more or less rooms available than usual

- The above should only account for confirmed bookings

# Step 1 - Project Set Up

The project setup for this application will be essentially the same as the one previously used for the Music API. However, this week we want you to try to create the project from scratch.

## Challenge

By the end of this step, you should have:

- an Express application that connects to a Mongo database
- a Mocha/Chai test environment to run e2e tests against your application
- a linter configuration for your project

### To complete this challenge

#### Repository set up

- Create a new directory for the project on your computer
- Create a new README file in the directory (and keep this up to date with anything you think would be useful!)
- Initialize a Git repository in the new directory
- Add an empty `.gitignore` file
- Create a repository for the project on GitHub
- Sync your local directory with the remote GitHub repository
- Initialize a new NPM project in your project directory
- Add `node_modules` to your `.gitignore` file
- Install `eslint-config-mcr-codes` as a dev dependency, and [configure a `.eslintrc` file according to the documentation](https://www.npmjs.com/package/eslint-config-mcr-codes?activeTab=readme)

#### Application set up

- Install `express` and `mongoose` and save them as dependencies
- Set up your basic `src/app.js` and `index.js` files similar to how you did in the Music API
  - `src/app.js` should configure and export a basic Express application
  - `index.js` should connect to a MongoDB database using Mongoose and a `DATABASE_CONN` environment variable, and then start (`listen`) the application defined in `src/app.js`
- Install `dotenv` and `nodemon` as development dependencies
- Add a `start` script to your `package.json` file with the following command: `nodemon -r dotenv/config index.js`. This uses `nodemon` to execute the `index.js` file with environment variables loaded from a `.env` file
- Create a `.env` file with a `DATABASE_CONN` value set to a MongoDB database. This will either be a local database (e.g. `mongodb://127.0.0.1:27017/library-api`) or one you have created on MLab.
- Add the `.env` file to your `.gitignore`

At this point, you should be able to run `npm start` in your terminal, and get a successful database connection and listening Express server

#### Test environment set up

- Install `mocha`, `chai` and `chai-http` as dev dependencies
- Copy across the `.mocha.opts` and `mocha.config.js` files from [the Music API project](https://github.com/MCRcodes/music-library-api)
- Add a `.env.test` file with a `DATABASE_CONN` value set to a **different** database to the `.env` file (e.g. `mongodb://127.0.0.1:27017/library-api-test`)
- Add the `.env.test` file to your `.gitignore`
- Add a `test` script to your `package.json` file: `mocha tests/**/*.test.js --opts .mocha.opts`.

At this point, you should be able to run `npm test` in your terminal, and Mocha should connect to your test database, start a test server and run your tests (N.B. there are no tests yet!)

Once you've done that, commit your work to GitHub and move on to the next step.

