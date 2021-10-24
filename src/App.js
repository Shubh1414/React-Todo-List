import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Container } from "react-bootstrap";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Navbar.Text style={{ color: 'white' }}>TodoList - App</Navbar.Text>
          </Navbar.Brand>

          <LoginButton />
          <LogoutButton />
        </Container>
      </Navbar>

      <Profile />
    </>
  );
}

export default App;
