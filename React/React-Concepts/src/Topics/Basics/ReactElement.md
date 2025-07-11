# How we can create React element using react core

const heading = React.createElement("h1", {id:"header"}, "Hello React")

- So basically createElement takes 3 arguments:

1. HTML Element
2. Object describes attributes, eg:(id,classes,src)
3. Children of this h1

const root = React.DOM.createRoot(document.getElementById("root));
root.render(heading)

- And when we render this to DOM it becomes HTML Element.
- ReactDOM takes the object and converts it into HTML and push to the browser.

### React Element ==> Object ==> HTML Element (render)

- So if we write code in this way then it becomes nightmare for the developers.

- Then JSX is introduced

# JSX : JavaScript XML

- JSX is a syntax extension for React.js that allows HTML- Like elements to be mixed with Javascript code.

- JSX is not pure javascript but JS-Engine only understand Javascript

const jsxHeading = <h1 id="header">Hello</h1>

# Before it goes to the browser the JSX code is transpiled into React element which is an object which JS engine understand.

## Transpiling is done by the Javascript Bundlers which has a package called BABEL

# Babel

- Babel is powerful and widely used JS compiler. It allows developers to write modern JS code and transpile it into a version that can run in all enviroments.

# Babel is commonly used for converting JSX syntax in React.

# babel simply takes our JSX code and convert it which JS engine will understand. This process happens at build time.

## JSX code ===> React.createElement ==> React Element - JS object ==> HTML Element
