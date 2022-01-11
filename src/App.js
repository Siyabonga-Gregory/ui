import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">Ghost Nav</NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
