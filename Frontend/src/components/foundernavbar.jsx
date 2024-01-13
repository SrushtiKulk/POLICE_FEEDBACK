import 'bootstrap/dist/css/bootstrap.min.css';
import './foundernavbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import HomePagePage from 'pages/HomePage/home';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand href="#home">About</Navbar.Brand> */}
          <Nav className="me-auto">

            <Nav.Link a href='/homepage'  ><h6>Home</h6></Nav.Link>
            <Nav.Link href="#home"><h6>MyProfile</h6></Nav.Link>
            <Nav.Link href="#home"><h6>Police Stations</h6></Nav.Link>
            <Nav.Link href="#pricing"><h6>Contact Info</h6></Nav.Link>
            <Nav.Link href="#pricing"><h6>Events</h6></Nav.Link>


            <form action="" className="search-form">
              <input type="text" placeholder="Search Station" />
              <button type="submit">Search</button>
            </form>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;