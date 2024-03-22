import React, { Component } from 'react';

class ClassComponent extends Component {
  // semua logic disini
  constructor(props) {
    super(props);
    this.count2 = 0;
    this.state = {
      count: 0,
    };
  }
  // arrow function bisa diganti dengan method jika di class
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.count2 = this.count2 + 1;
    console.log("handle click method state class = " + this.state.count);
    console.log("handle click method class = " + this.count2);
  };
  componentDidMount() {
    // untuk melakukan fetching API
    // authentification pada component ini, jadi di cek dulu apakah usernya benar atau tidak
    console.log("componenDidMount");
  }

  componentDidUpdate() {
    console.log("componenDidUpdate");
  }


  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>This is a simple class component</p>
        <button onClick={this.handleClick}>Increment</button>
        <p>Count: {this.state.count}</p>
        <p>Count: {this.count2}</p>
      </div>
    );
  }
}

export default ClassComponent;