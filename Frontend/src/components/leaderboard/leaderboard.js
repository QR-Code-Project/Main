//import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";


const leaderboard = () => {

  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getTeamData');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

    /*
    const data = [
        { name: 'Sprinter', clues: '18/20' },
        { name: 'Speedy', clues: '9/20' },
        { name: 'Slowpoke', clues: '2/20' }
      ];
      */
      

  return (
    <div>
      <h1>Leaderboard</h1>
      <Table striped bordered hover>
        <thead>
            <tr>
              <th>Team Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.teamname}</td>
                <td>{Object.keys(row.url).length}</td>
              </tr>
            ))}
          </tbody>
      </Table>
    </div>
  );
};

export default leaderboard;
