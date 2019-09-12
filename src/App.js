import React, { Component } from "react";
import "./App.css";

const nameInput = React.createRef();
const dobInput = React.createRef();
const genderInput = React.createRef();
const contactInput = React.createRef();

class App extends Component {
  state = {
    name: "",
    bday: "",
    gender: "",
    contact: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: nameInput.current.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(nameInput.current.value);
    console.log(dobInput.current.value);
    console.log(genderInput.current.value);
    console.log(contactInput.current.value);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" ref={nameInput} onChange={this.handleChange}/>

          <label>DOB:</label>
          <input type="date" name="bday" ref={dobInput} />

          <label>Gender:</label>
          <select name="gender" ref={genderInput}>
            <option name="male">Male</option>
            <option name="female">Female</option>
          </select>

          <label>Contacts:</label>
          <input type="tel" name="contact" ref={contactInput} />

          {/*<label>Contact:</label>
          <input type="tel" name="contact" />

          <label>Gender:</label>
          <input type="radio" name="gender" /> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
