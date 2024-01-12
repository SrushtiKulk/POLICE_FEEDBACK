import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useNavigate } from 'react-router-dom';

function Navbarv() {
  const navigate = useNavigate();
  const [isAuthenticated,setIsAuthenticated] = useState(null);
  
  useEffect(() => {
    // Update isAuthenticated state when localStorage changes
    setIsAuthenticated(localStorage.getItem('user'));
  }, []);

  const navigateLogin = () => {
    navigate('/login');
  };

  const navigateSignUp = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('user');
    // Update isAuthenticated state
    setIsAuthenticated(false);
    window.location.reload();
    // Redirect to the home page or login page after logout
    navigate('/');
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Your Logo or Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <AnchorLink href="#about">
                <Nav.Link>
                  <h5>About</h5>
                </Nav.Link>
              </AnchorLink>
              <AnchorLink href="#police">
                <Nav.Link>
                  <h5>Police</h5>
                </Nav.Link>
              </AnchorLink>
              <AnchorLink href="#public">
                <Nav.Link>
                  <h5>Public</h5>
                </Nav.Link>
              </AnchorLink>

              {isAuthenticated !== null ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link onClick={navigateLogin}>Login</Nav.Link>
                  <Nav.Link onClick={navigateSignUp}>SignUp</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarv;
