# What is package.json?
- package.json is the configuration file for our projects which include
 - name,version and metadata
 - dependencies and devDependencies
 - scripts(command to run tasks)
 - project configuration options

# What is package.lock.json?
- Lock the exact version of the dependencies
- It ensures consistencies install across machines

# Different types of version used for package versions?

version : MAJOR.MINOR.PATCH

| Symbol      | Example  | Meaning                                    |
| ----------  | -------- | ------------------------------------------ |
| `^` caret   | `^1.4.2` | Allows **minor + patch** updates (`1.x.x`) |
| `~` tilde   | `~1.4.2` | Allows only **patch** updates (`1.4.x`)    |
| None        | `1.4.2`  | Locks version exactly                      |

# What is the scripts sections used for?
"scripts": {
  "start": "node index.js",
  "build": "webpack",
  "test": "jest"
}

# What are dependencies and devDependencies?

dependencies:
Packages required in production (your app needs them to run).
Example: react, express

devDependencies:
Packages needed only during development.
Example: webpack, eslint, jest

# How do you update dependencies?
npm update

Or view outdated packages:

npm outdated

"browserslist": [
  "> 0.5%",
  "last 2 versions",
  "not dead"
]

# difference between npm and yarn