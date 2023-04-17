import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cluefound from "./components/app/Cluefound";
import Leaderboard from "./components/leaderboard/leaderboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Cluefound />} />
          <Route path="leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



/*
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import clue_found from "./components/app/clue_found";
import leaderboard from "./components/leaderboard/leaderboard";
import reportWebVitals from './reportWebVitals';


import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './components/app/clue_found';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
