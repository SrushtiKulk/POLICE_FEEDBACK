import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./events.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./police.css";

function Trendingevents() {
  return (
    <div id='police' >
      <div className='policecontent'>
        <h5>POLICE</h5>
        <p>Our dedicated law enforcement professionals work tirelessly to ensure the safety and well-being of our community.
          Committed to upholding the highest standards of integrity and service, our police force is here to protect and serve with diligence and respect.
          At the core of our policing philosophy is a commitment to community engagement and collaboration. We believe in fostering strong connections between our officers and the individuals they serve, understanding that mutual trust and open communication are essential for effective policing. Our team is not just here to enforce the law; we are partners in building a safer and more harmonious community.
          Together with the community, we strive to create an environment where everyone feels secure, valued, and heard.</p>
      </div>
      <CardGroup className='row'>
        <Card classname="column">
          <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Officer 1
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Designation</small>
          </Card.Footer>
        </Card>
        <Card classname="column brdr">
          <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
          <Card.Body>
            <Card.Title className='title'>Name</Card.Title>
            <Card.Text>
              Officer 2
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Designation</small>
          </Card.Footer>
        </Card>
        <Card classname="column brdr">
          <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Officer 3
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Designation</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Trendingevents;