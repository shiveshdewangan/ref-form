import React, { Component, createRef } from "react";
import schema from "./schema";
import "./App.css";

const refs = {};
console.log(schema);
schema.forEach((s) => {
  console.log(s.name);
  refs[s.name] = createRef();
});
console.log("refs", refs);

class App extends Component {
  state = {
    name: "",
    bday: "",
    gender: "",
    contact: "",
    guardian_consent: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(refs.name.current.value);
    console.log(refs.birth_date.current.value);
    console.log(refs.gender.current.value);
    console.log(refs.contact_info.current.value);
    console.log(refs.guardian_consent.current.value);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              ref={refs.name}
              onChange={this.handleChange}
              required = {false}
            />
          </div>

          <div>
            <label>DOB:</label>
            <input
              type='date'
              name='bday'
              ref={refs.birth_date}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Gender:</label>
            <select
              name='gender'
              ref={refs.gender}
              onChange={this.handleChange}
            >
              <option name='male'>Male</option>
              <option name='female'>Female</option>
              <option name='none' selected></option>
            </select>
          </div>

          <div>
            <label>Contacts:</label>
            <input
              type='tel'
              name='contact'
              ref={refs.contact_info}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Guradian Consent</label>
            <select
              name='guardian_consent'
              ref={refs.guardian_consent}
              onChange={this.handleChange}
            >
              <option name='required'>Yes</option>
              <option name='not-required'>No</option>
              <option name='none' defaultValue></option>
            </select>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default App;
