import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'reactstrap';
import NavBarV1 from './components/NavBarV1';
import ButtonsV1 from './components/ButtonsV1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><Button color="danger">Hallo from Ghost Coder</Button>
           <div><NavBarV1/></div><hr/>
           <div> <ButtonsV1/></div> <hr/>
        </div>
      </header>
    </div>
  );
}
export default App;
