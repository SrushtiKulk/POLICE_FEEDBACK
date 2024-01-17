import 'bootstrap/dist/css/bootstrap.min.css';
import './foundernavbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FeedBack from "pages/Public/FeedBack";
import './womennavbar.css'


const logoStyle = {
  width: '65px',
  height: '65px'
};

function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{backgroundColor: "#365486"}} data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand href="#home">About</Navbar.Brand> */}
          <Nav className="me-auto">
          <Navbar.Brand href="#home" className='logo'><img src="https://police.rajasthan.gov.in/Old/hackathon/assetsNew/Logo.png"
            alt="Rajasthan Police" style={logoStyle} /></Navbar.Brand>

            <Nav.Link a href='/'><h6 className='el-nav'>Home</h6></Nav.Link>
            <Nav.Link a href='#wfeedback'><h6 className='el-nav'>FeedBack</h6></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;