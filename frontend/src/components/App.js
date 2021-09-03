import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./Homepage";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <Homepage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App name='pino' />, appDiv);