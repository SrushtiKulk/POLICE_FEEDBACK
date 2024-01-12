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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quam voluptatum pariatur natus ad doloribus rerum voluptatibus, iusto voluptatem dolores eum quod expedita, blanditiis quos sit quia! Cum at quos, quia omnis pariatur laborum laudantium aperiam eveniet minus voluptas ipsum quasi sapiente error assumenda nulla eligendi quisquam eum debitis tenetur. In iusto deserunt officiis maiores doloremque laudantium iste incidunt eveniet porro corporis quos id ea et doloribus sed possimus recusandae tempore saepe dolor, voluptate obcaecati repellendus expedita, laborum reprehenderit. Quod accusantium quis ipsa dolore officiis reprehenderit dolorem fugit quam, veritatis aliquid nobis nam aspernatur, delectus adipisci ut! Doloribus, beatae provident?</p>
        
      </div>
      
    
    <CardGroup>
      <Card>
        <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
        <Card.Body>
          <Card.Title><h3>Name</h3></Card.Title>
          <Card.Text>
            Officer 1
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
        <Card.Body>
          <Card.Title><h3>Name</h3></Card.Title>
          <Card.Text>
            Officer 2
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png" />
        <Card.Body>
          <Card.Title><h3>Name</h3></Card.Title>
          <Card.Text>
            Officer 3
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default Trendingevents;