## npm is a standard repository of all the packages or a package manager

to initialize our project with npm -- npm init

## package.json -- It is a configuration of our npm and store all details and dependencies of our project

# There are two types of dependencies

- devDependencies -- It is generally required in development of our project
- dependencies -- It uses in production.

# Difference between Tilde(~) and carat(^)

# What is package-lock.json -- it keeps the track of exact verion of our dependencies or packages

in package-lock.json there is one property integrity which stores the sha or hash code (bcoz in some situation like our code is working on local but not work on production so one of the cause is mismatch of this sha or hash code)

# What is node_modules - We can say that it is a database of all our dependencies or packages

# What is transitive dependencies

# What is npm & npx

npx -- to execute a package

# What is Browsers List

# Scripts in package.json

- "start":"parcel index.html",
  "build":"parcel build index.html",

npm start
npm run build
