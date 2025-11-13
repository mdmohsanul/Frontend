## What is npm

- npm provides thousands of packages for us to use in our applications.

- node common core module
- npm package - It is node module that are created by third party / other developers

## How to install a package

# To install package globally

- npm install [packagename] -g
- npm i [packagename] -g
- npm add [packagename] -g

# To install package as dev-dependencies

- npm install [packagename] -D or --save-dev
- npm i [packagename] -D or --save-dev
- npm add [packagename] -D or --save-dev

# To install package as production-dependencies

- npm install [packagename]
- npm i [packagename]
- npm add [packagename]

# To install a package with a particular version

- npm i [packagename]@[version no] --> eg - npm i uuid@8.3.1

# nodemon - It monitors our file and as we save it automatically restart the servers

npm i nodemon -g ----> this will install our package globally
how to start the server

- modemom [fileName] --> If filename is index.js then no need to mention the file name
  If other than index.js then write nodemon server.js or any other filename

## To initialize npm in our project - It will create package.json file

- npm init
- npm init -y

## What are scripts in package.json file

- It gives us command to run our project

## "uuid": "^11.0.5"

- 11 is the major version
- 0 is the minor version
- 5 is the patch

- If we declare ^(carot) in start or version number then it automatically update the minor and patch .
- If we declare ~(tilde) in start or version number then it automatically patch .

## To check if our packages have major or minor update

- npm update

## To remove/uninstall/delete a package

- npm rm/un/uninstall [packagename] -[flag if it is global or dev dependencies]
- eg: npm rm nodemon
