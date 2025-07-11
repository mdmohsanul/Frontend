import React from "react";

class Class_API_Call extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/mdmohsanul");
    const data = await res.json();
    this.setState({
      user: data,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <>
        <h1>User Info:</h1>
        <p>{this.state.user.name}</p>
      </>
    );
  }
}

export default Class_API_Call;
