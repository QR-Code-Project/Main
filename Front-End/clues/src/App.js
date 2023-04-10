import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Please enter your email address.</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="username@stetson.edu" />
      <br />
      <label htmlFor="inputPassword5" className="form-label">Please enter your password.</label>
      <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" />
      <br />
      <Link to="/clue" className="btn btn-outline-secondary">Confirm identity</Link>
    </div>
  );
}

export default App;
