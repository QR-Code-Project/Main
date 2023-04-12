//import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import leaderboard from '../leaderboard/leaderboard'



function App() {

  const teamname = useRef();
  

  //send a post request when backend is setup to give them the username
  const handleSubmit = (event) => {
    console.log("works");
    event.preventDefault();
    const username = teamname.current.value;
    axios.post('/api/username', { username })
      .then(response => console.log(response))
      .catch(error => console.log(error));

    
  };



  /*
  useEffect(() => {
    async function getResults() {
      const results = await axios(`https://images-api.nasa.gov/search?q=${query}`);
      setPhotos(results.data["collection"]["items"]);
      setLoading(true);
    }
    getResults();
  }, [query])
  */

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>You found a clue</h1>
      <h1>Title: </h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Team name</Form.Label>
          <Form.Control
          type="text"
          id="username"
          ref={teamname}
          placeholder="Enter Team Name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1>Clue: </h1>
    </div>
  );
}

export default App;
