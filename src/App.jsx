import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/Navi.css";
import Nabar from "./component/Navi";
import News from "./component/News";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Nabar />
        <News />
      </>
    );
  }
}
