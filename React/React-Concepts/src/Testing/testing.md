# Types of testing that developer does

1. Unit Testing
2. Integration Testing
3. End To End Testing

# Unit Testing

- Testing one component in isolation.
- If we test one specific component like if we test only header component then this type of testing is known as unit testing.

# Integration Testing

# End To End Testing

- Test the whole application (cypress,selenium)

# For testing we have to install some packages

- React Testing Library
  React testing library is build on top of DOM testing library by adding API's for working with react components.

- react testing library uses Jest behind the scenes.

# Setup testing in application

- Install React testing library
- Install Jest
- Install dependencies like babel,Vite etc
- Configure babel
- Configure parcel config file to disable default babel transpilation (.parcelrc)
- Jest configuration
  npx jest --init
- npm install --save-dev jest-environment-jsdom
- - Install @babel/preset-react - to make JSX work in test cases
-

# To run the test cases we need an enviroment because it is not running in browser.

jsdom > So we have one package known as jsdom which has browser like enviroment.
