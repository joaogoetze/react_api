import React from 'react';
import logo from '../logo.svg';
import MyButton from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  }

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <br></br>
        <MyButton />
        <br></br>
        <button onClick={goToDashboard}>Dashboard</button> 
      </header> 
    </div>
  );
}

export default Home;