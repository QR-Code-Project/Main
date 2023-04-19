
//import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useRef, useEffect } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
//import leaderboard from '../leaderboard/leaderboard'

const Cluefound = () => {



  //const { value } = props.match.params;
  const teamname = useRef();
  //const navigate=useNavigate();


  //send a post request when backend is setup to give them the username
  
  const handleSubmit = (event) => {

    console.log("works");
    event.preventDefault();
    const username = teamname.current.value;
    axios.post('/api/username', { username })
      .then(response => onsole.log(sucess))
      .catch(error => console.log(error));
  };
  



  /*
  useEffect(() => {
    async function getResults() {
      const results = await axios(`http://localhost:8080/getClueData`);
      setData(response.data);
      setLoading(true);
    }
    getResults();
  }, [query])
  */
  
  
  
  return (
    <div >
      {/*<p>Value: {value}</p> */}


      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/leaderboard">Leaderboard</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>You found a clue</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Team name</Form.Label>
          <Form.Control
          type="text"
          id="username"
          ref={teamname}
          placeholder="Enter Team Name" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <h1>Clue: </h1>
      </div>  );
};

export default Cluefound;

