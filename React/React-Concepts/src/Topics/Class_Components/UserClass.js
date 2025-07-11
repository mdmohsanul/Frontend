import React from "react";

class UserClass extends React.Component {
  // recieving props
  constructor(props) {
    super(props); //
    // Declaring state variables
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Children constructor ", this.props.name);
  }
  componentDidMount() {
    console.log("Children Component Did Mount ", this.props.name);
  }
  render() {
    console.log("Children render ", this.props.name);

    const { name, location } = this.props; // desctructuring props
    return (
      <>
        <div>
          <p>Count: {this.state.count}</p>{" "}
          <button
            onClick={() => {
              // this is how we are update state variables
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increase
          </button>
          <h1>Name: {name}</h1>
          <p>Age: 27</p>
          <p>State: {location}</p>
          <p>Contact: @mdmohsanul</p>
        </div>
      </>
    );
  }
}

export default UserClass;

/* 
Class component -  A class based components is a normal javascript class which extend some properties from React.Component
and also has a render method which return some piece of JSX.

Whenever a class component is called or instantiated the constructor is called after that render is called
In Class component props is recieved in the constructor

**** Whenever a new instance of class is created this constructor is called and props is extracted.

Whenever you create instance of a class the constructor is called and this is the best place to recieve props and this is the 
best place to create state variables
*/

/* 
State variable inside class component

- The state object is where you store property values that belongs to that component
- When the state object changes the component re-render

--> State is a big object which contains all the state variables.
this.state = {} declaration of state variables

this.setState({}) update/change state object

React give access to important function this.setState() method and inside setState we will passes an object which
contain updated state variables

*/
