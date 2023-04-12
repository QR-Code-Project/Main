//import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useRef, useEffect } from 'react';


function Leaderboard() {


    /*
    const ExampleTable = () => {
        const [data, setData] = useState([]);
    };
      
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get('https://example.com/api/data');
        setData(result.data);
        };
    
        fetchData();
    }, []);
    */

    const data = [
        { name: 'Sprinter', clues: 18/20 },
        { name: 'Speedy', clues: 9/20 },
        { name: 'Slowpoke', clues: 2/20 }
      ];

  return (
    <div className="App">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Clues</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.clues}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default Leaderboard;
