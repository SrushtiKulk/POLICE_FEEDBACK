import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./events.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./police.css";

function Womenevents() {
    return (
        <div id='police' >
            <div className='policecontent'>
                <h5>WOMEN POLICE</h5>
                <p>In the vibrant tapestry of Rajasthan, Indian women police officers emerge as icons of strength and resilience, donning khaki uniforms that symbolize both tradition and modernity. Amidst the arid landscapes, they navigate the complexities of law enforcement with grace, embodying the valor deeply rooted in the state's cultural fabric. These remarkable women transcend societal expectations, challenging stereotypes and shattering barriers with unwavering determination. Beyond their roles as law enforcers, they become beacons of justice, empowerment, and catalysts for societal transformation.

                    Fearlessly confronting adversity, these officers blend the grace of traditional attire with the tenacity required for their roles, forging a powerful image that resonates across Rajasthan. Their stories, echoing far beyond state borders, emphasize the universal strength of Indian women. With a commitment to upholding justice and equality, they stand as living testimonials to the evolving narrative of women's empowerment.</p>

                <p>In Rajasthan's dynamic landscape, these daughters in khaki embody the fusion of tradition and progress, breaking the chains of convention and inspiring generations. Against the backdrop of majestic deserts and historic palaces, their dedication and empathy paint a vivid picture of empowerment, reinforcing the idea that strength knows no gender in the ever-evolving story of Rajasthan and its resilient women in uniform.

                </p>

            </div>


            <CardGroup>
                <Card>
                    <Card.Img variant="top" className='img' src="https://imgs.search.brave.com/FxxifqUlQ7iwQfUfSOx-N398eCIee41vySLZTQQV5mE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY3JpbWUtYW5k/LXNlY3VyaXR5LTEt/NS81MTIvMTgtNTEy/LnBuZw" />
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
                    <Card.Img variant="top" className='img' src="https://imgs.search.brave.com/FxxifqUlQ7iwQfUfSOx-N398eCIee41vySLZTQQV5mE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY3JpbWUtYW5k/LXNlY3VyaXR5LTEt/NS81MTIvMTgtNTEy/LnBuZw" />
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
                    <Card.Img variant="top" className='img' src="https://imgs.search.brave.com/FxxifqUlQ7iwQfUfSOx-N398eCIee41vySLZTQQV5mE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY3JpbWUtYW5k/LXNlY3VyaXR5LTEt/NS81MTIvMTgtNTEy/LnBuZw" />
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

export default Womenevents;