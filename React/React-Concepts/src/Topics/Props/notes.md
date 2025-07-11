# passing a string

<ComponentName name='alice'>

# passing a number

<ComponentName age={30}>

# passing multiple props

<User name="John" age={25} isAdmin={true} />

# passing an object

if we pass an object by spreading it in component then we can easily destructure on fly
const ComponentName = ({name,age}) => {}

const user = {name:"John",age:34}
<ComponentName {...user}>
<ComponentName data={user}>

# passing a JSX elements

const CustomMessage = ({ message }) => {
return <div>{message}</div>;
};

const App = () => {
return <CustomMessage message={<strong>Important Notice!</strong>} />;
};

---

1. What are props in react?

- props are properties or data that are passed as a parameter from a parent component to a child component.
- Props are read-only or Immutable.
- They allow components to be dynamic and reusable.
- props are object.

3. Can we change the value of props?

- No, props are immutable in React.
- A component cannot modify the props it receives. If a value needs to change, it should be handled via state instead of props.

Why is Modifying Props Bad?

- React expects props to be immutable. When you mutate a prop, React does not detect the change properly, which can cause UI inconsistencies.
- Since React does not track mutations, it may not re-render components correctly when props are mutated.

4. How can you set default props for a component?

- const Button = ({ text = "Click Me" }) => {
  return <button>{text}</button>;
  };

5. How can you pass functions as props?

const Parent = () => {
const handleClick = () => alert("Button clicked!");
return <Child onClick={handleClick} />;
};

const Child = ({ onClick }) => {
return <button onClick={onClick}>Click Me</button>;
};

- This allows the parent component to control the child's behavior.

6. What are prop types, and why should you use them?

- Prop types help validate props and ensure components receive the correct data types.
- It Helps to catch runtime errors in development.

7. What is the difference between passing props using spread operator vs. individually?

- Spread props are useful for dynamic props but can lead to unnecessary prop forwarding.

8. What are children props in React?

- props.children allows components to pass JSX elements or component as a props.
  {example in Parent Component}

9. What happens if a required prop is missing?

-If a prop isn’t marked as required, React won’t throw an error, but the component may fail to render properly.

10. What happens if the same prop is passed twice? Which one takes priority?

- If the same prop is passed twice, the last defined prop takes priority.

11. What is prop Drilling?

- passing props deep into nested components.
- If a component receives too many props, especially ones it doesn't directly need, it leads to prop drilling.
- hard to maintain code

- Thats why we are using global store where all our state variables are kept and can access those variable directly to the nested components instead of passing as a props
- use Context API
- State managenent tools like :- Redux, Zustand
