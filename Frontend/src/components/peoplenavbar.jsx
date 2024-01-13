import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function ColorSchemesExample() {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    // Use the navigate function to navigate to the FeedBack page
    navigate('/user/feedback');
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand href="#home">About</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href='/homepage'><h6>Home</h6></Nav.Link>
            <Nav.Link href="/myprofile"><h6>MyProfile</h6></Nav.Link>
            {/* Use the handleFeedbackClick function for the FeedBack link */}
            <Nav.Link onClick={handleFeedbackClick}><h6>FeedBack</h6></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
