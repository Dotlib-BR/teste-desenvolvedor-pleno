import React from 'react';
import { Navbar } from 'react-bootstrap';
import Routes from './routes';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <i className="d-inline-block align-middle fab fa-cpanel" style={{ fontSize: 50, marginLeft: 30 }}></i>
        </Navbar.Brand>
      </Navbar>
      <Routes />
    </>
  );
}

export default App;
