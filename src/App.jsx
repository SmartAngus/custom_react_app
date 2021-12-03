import React, { Component} from "react";
import "./App.css";
import Button from "./components/Button";
import icon from './assets/images/icon.png';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Button title="这是一2个按钮"/>
        <img src={icon} alt="" />
      </div>
    );
  }
}

export default App;