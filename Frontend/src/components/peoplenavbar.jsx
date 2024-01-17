import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './peoplenavbar.css'
import { NavLink } from 'react-bootstrap';
import FeedBack from 'pages/Public/FeedBack';


function ColorSchemesExample() {
  const navigate = useNavigate();

  const handleFeedbackClick = (city) => {
    // Use smooth scrolling to navigate to the police station section
    document.getElementById('policeStationsSection').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const showMenu = () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.style.display = 'block';
      navLinks.style.right = '5px';
    }
  }

  const hideMenu = () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.style.display = 'none';
    }
  }

  const handleRegClick = (city) => {
    // Use smooth scrolling to navigate to the police station section
    document.getElementById('pcstations').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const logoStyle = {
    width: '65px',
    height: '65px'
  };

  return (
    <>
      <Navbar style={{backgroundColor: "#365486"}} expand="lg">
        <Container className='cont'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Navbar.Brand href="#home" className='logo'><img src="https://police.rajasthan.gov.in/Old/hackathon/assetsNew/Logo.png"
            alt="Rajasthan Police" style={logoStyle} /></Navbar.Brand>

              <Nav.Link a href='/'><h6 className='elemts'>Home</h6></Nav.Link>
              <NavDropdown title="Feedback" id="basic-nav-dropdown" className='elemts'>
                <NavDropdown.Item href = '#policeStationsSection' onClick={() => handleFeedbackClick('jaipur')}>
                  Jaipur
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleFeedbackClick('jodhpur')}>
                  Jodhpur
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => handleFeedbackClick('udaipur')}>
                  Udaipur
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className='nav-public' a href = 'women' ><h6 className='elemts'>Women</h6></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <h6>Introduction</h6>
        <div className="Intro">
          <p>The duties of the police in implementing the outlined guidelines are multifaceted. I
            In the context of law enforcement procedures, police officers are responsible for carrying out arrests and investigations while maintaining respectful interactions with the public.
            They play a pivotal role in fostering community engagement by actively participating in community-oriented policing initiatives, building positive relationships, and addressing community concerns.
            Regarding use of force protocols, police officers must exercise discretion and judgment, ensuring that their actions align with legal and ethical standards.
            In traffic management, officers are tasked with enforcing guidelines to prioritize road safety, conducting checkpoints, and addressing traffic violations to maintain order.
            In emergency response situations, the police are at the forefront, implementing protocols to effectively manage and mitigate the impact of natural disasters, accidents, and criminal incidents. 
            Technology usage involves the responsible deployment and management of surveillance systems, databases, and communication tools to enhance law enforcement capabilities.
            Professional conduct standards and ethics guide the day-to-day actions of police officers, emphasizing integrity, honesty, and accountability in their interactions with the community. 
            Ongoing training and development are essential for officers to stay updated on best practices, new technologies, and evolving legal standards.
            Community policing initiatives involve police officers actively engaging with communities, collaborating on crime prevention strategies, and participating in safety programs. 
            Transparency and accountability are paramount, with officers expected to address complaints responsibly, demonstrating a commitment to upholding the highest standards of public service.
          </p>
      </div>

    <Container className='regcontainer' id='policeStationsSection'>
      {/* Police Stations Section */}
      {/* <div className="policeStationsSection"> */}
        
            <h6>Police Station Region</h6>
            <div className="row">
              <div className='column' href='#pcstations' onClick={() => handleRegClick('jaipur')}>
                <h6>Jaipur Rural</h6>
              </div>
              <div className='column'>
                <h6>Dausa</h6>
              </div>
              <div className='column'>
                <h6>Sikar</h6>
              </div>
              <div className='column'>
                <h6>Alwar</h6>
              </div>
              <div className='column'>
                <h6>Bhiwadi</h6>
              </div>
              <div className='column'>
                <h6>Bhiwadi</h6>
              </div>
          </div>
        </Container>
      

        <Container className='stcontainer'>
      {/* Police Stations Section */}
      {/* <div className="policeStationsSection"> */}
        
            <h6>Police Stations</h6>
            <div className="row-st" id='pcstations'>
              <div className='col-st'>
                <h6>Shahapura</h6>
                <button className='icon-menu' onClick={showMenu}>Menu</button>
                
                <Nav className="fdbckmenu" id="navLinks">
                  <Nav.Link href="feedback"><h5>Station Feedback</h5></Nav.Link>
                  <Nav.Link href="feedback"><h5>Police Feedback</h5></Nav.Link>
                  <Nav.Link href="opinion" ><h5>Your Suggestions</h5></Nav.Link>
                  <NavLink href="#features"  onClick={hideMenu}><h5>Close</h5></NavLink>
                </Nav>
              
              </div>

              <div className='col-st'>
                <h6>Manoharpur</h6>
                
              </div>
              
              <div className='col-st'>
                <h6>Govindagad</h6>
              </div>
          </div>
        </Container>
      
    </>
  );
}

export default ColorSchemesExample;
