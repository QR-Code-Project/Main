//import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import {
  Outlet,
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
//import leaderboard from '../leaderboard/leaderboard'

const Cluefound = () => {
  //const { value } = props.match.params;
  //const teamname = useRef();
  //const navigate=useNavigate();
  const navigate = useNavigate();

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const url = location.pathname + searchParams.toString();

  const [data, setData] = useState(null);

  const [teamname, setTeamname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeam = { teamname, url };
    axios
      .post("http://localhost:8080/api/teamData", newTeam)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    navigate("/?DE4T1");
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/getClueData/${url}"
      );
      setData(response.data);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  /*
  //send a post request when backend is setup to give them the username
  const handleSubmit = (event) => {

    console.log("works");
    event.preventDefault();
    const username = teamname.current.value;
    axios.post('/api/username', { username })
      .then(response => onsole.log(sucess))
      .catch(error => console.log(error));
  };
  */

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
    <div>
      {/*<p>Value: {value}</p> */}

      <h1>You found a clue</h1>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your team name</Form.Label>
          <Form.Control
            type="text"
            id="username"
            ref={teamname}
            placeholder="Team Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br></br>
      <br></br>
      <h1>Clue: </h1>
      <br></br>
      <br></br>

      <Navbar
        class="navbar fixed-bottom bg-body-tertiary"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/leaderboard">Leaderboard</Navbar.Brand>
        </Container>
      </Navbar>

      <Toast
        className="Toast-container"
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>
          Your team name has been submitted successfully and your new found clue
          has been recorded.
          <Button variant="primary" href="/leaderboard">
            See leaderboard
          </Button>
          <Button class="btn btn-secondary btn-sm" data-bs-dismiss="toast">
            Close
          </Button>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Cluefound;
