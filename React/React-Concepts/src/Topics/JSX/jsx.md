# jsx - javascript XML

- It is an javascript extension used to with react to describe the UI .

# Few key points we should remember while working with JSX

- Combines JavaScript + HTML:
You can embed JS expressions inside {}.

- Must have one parent element:
JSX expressions must return a single root element.

- Attributes use camelCase:
class → className
onclick → onClick

- JSX prevents injection attacks:
React automatically escapes values to prevent XSS (cross-site scripting).

- JSX needs to be compiled:
Browsers don’t understand JSX directly — tools like Babel convert it to plain JavaScript.

- Babel is responsible for converting our JSX code that js engine understand

# Steps of transpiling or converting our react code

JSX (transpiled before it reaches the JS engine ) --> Parcel --> Babel

JSX => React.createElement => ReactElement - JS Object => HTMLElement (render)

### go to babel website and try to convert on it

# What is JSX

# What is Babel - transpiler or javascript compiler
