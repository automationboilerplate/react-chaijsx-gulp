# Testing React components with chai-jsx

## Overview:
This project is a boilerplate Unit testing project for react framework with chai-jsx. I have taken a small reactjs development project for filterable tables and added the Unit testing on top of it.

Development framework is from the GIT Repository:
https://github.com/jpsierens/webpack-react-redux

Testing framework uses chai-jsx, Mocha framework by rendering the react component on jsdom.
* jsdom - JavaScript Implementation of DOM.jsdom is implemented in JavaScript, so we can have a DOM-like API to work with without needing a browser.
* chai-jsx - JSX react element assertion for chai.
* Mocha - Unit Testing framework and uses mocha test runner with mochawesome reporting.

## How to Expose the App:
* Prerequisite:
Install Nodejs, and gulp at the global level on your machine.

Clone this project and do an
* npm install - For Installing the required components.
* npm start - For starting the Web app on your localhost. The web application will be listening on port 3000. http://localhost:3000/
* npm test - Will run the Unit Tests.

The Unit tests for DOM validation can be found in the folder test/unit_spec/components `.js` files.
The setup for rendering the react component on jsdom is available in test/setup.js.

With this Approach Individual react components can be tested for all the possible values and we can have very minimal UI functional testing.

For any queries Please contact vicky.008@gmail.com.
