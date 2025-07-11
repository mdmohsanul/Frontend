import React from "react";
import Class_API_Call from "./Class_API_Call";
import User from "./User";
import UserClass from "./UserClass";

class Class_Components extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <div>
          {/* <User name="Md Mohsanul Hoda" /> */}
          <Class_API_Call />
          <UserClass name="First" location="Dehradun" />
          <UserClass name="Second" location="Dehradun" />
        </div>
      </>
    );
  }
}
/* 
- Parent Constructor 
- Parent render
  - Children constructor First
  - Children render First

  - Children constructor Second
  - Children render Second

  <DOM UPDATE IN SINGLE BATCH>
  - Children Component Did Mount First
  - Children Component Did Mount Seond

- Parent Component Did Mount
*/

export default Class_Components;

/* 
How lifecycle of class components works?
- As soon as we create an instance of class component the constructor is called after that the render method is called then 
  componentDidMount(){} is called.

When componentDidMount(){} is called?
- when our class component is rendered or mounted successfully.

What is the use of componentDidMount(){}?
- To make an API call

** So it is similar to useEffect hooks as React first render the component and after that makes an API call and after that it fills
the content with the API fetched data.

*/
