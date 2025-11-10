# Why can't we return multiple elements at the same time?

- As after JSX is compiled it is converted to normal javascript object and we cannot return multiple Js object at the same time.


# What is React Fragment?

- React Fragment is a feature introduced in React 16 that allows you to return multiple elements from a react component by allowing you to group a list of children without adding extra nodes to the DOM.

- To return multiple element from react component, you'll need to wrap the element in a root element.

# The main difference between div and fragment is: Fragment clears out the extra divs form the DOM tree while div adds a div to the DOM tree.

<>

</>

<React.Fragment>

</React.Fragment>