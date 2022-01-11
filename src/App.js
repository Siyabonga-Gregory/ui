import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'reactstrap';
import NavBarV1 from './components/NavBarV1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBarV1/>
          <Button color="danger">Hallo from Ghost Coder</Button>
        </div>
      </header>
    </div>
  );
}
export default App;
