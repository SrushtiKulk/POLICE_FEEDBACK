/*global google*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

function Navbarv() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

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

  const changeLanguage = (languageCode) => {
    if (window.google && window.google.translate) {
      window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: languageCode,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      }, 'google_translate_element');
    } else {
      // Load the Google Translate API script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.onload = () => {
        // Initialize Google Translate API after the script is loaded
        window.google.translate.translate({
          pageLanguage: 'en',
          destinationLanguage: languageCode,
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };

      document.head.appendChild(script);
    }
  };

  const logoStyle = {
    width: '65px',
    height: '65px'
  };

  return (
    <>
      <Navbar style={{backgroundColor: "#365486"}} expand="lg">
        <Container className='cont'>
          <Navbar.Brand href="#home" className='logo'><img src="https://police.rajasthan.gov.in/Old/hackathon/assetsNew/Logo.png"
            alt="Rajasthan Police" style={logoStyle} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <AnchorLink href="#about">
                <Nav.Link style={{ color: 'white' }}>
                  <h5>About</h5>
                </Nav.Link>
              </AnchorLink>
              <AnchorLink href="#police">
                <Nav.Link style={{ color: 'white' }}>
                  <h5>Police</h5>
                </Nav.Link>
              </AnchorLink>
              <AnchorLink href="#public">
                <Nav.Link style={{ color: 'white' }}>
                  <h5>Public</h5>
                </Nav.Link>
              </AnchorLink>

              {isAuthenticated !== null ? (
                <Nav.Link onClick={handleLogout} className = 'shift' style={{ color: 'white' }}><h5>Logout</h5></Nav.Link>
              ) : (
                <>
                  <Nav.Link onClick={navigateLogin} className = 'shift' style={{ color: 'white' }}><h5>Login</h5></Nav.Link>
                  <Nav.Link onClick={navigateSignUp}  className = 'shift' style={{ color: 'white' }}><h5>SignUp</h5></Nav.Link>
                </>
              )}
              <GoogleTranslate />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarv