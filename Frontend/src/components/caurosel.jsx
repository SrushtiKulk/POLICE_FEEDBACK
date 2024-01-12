import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./caurosel.css"

function Carouselv() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="slide"
          src="https://www.police.rajasthan.gov.in/old/hackathon/assetsNew/Banner2%20(convert.io).png"
          alt="First slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src="https://www.police.rajasthan.gov.in/old/hackathon/assetsNew/Hero_Logo%20.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src="https://img.myloview.com/posters/atmanirbhar-bharat-abhiyan-self-reliant-india-make-in-india-rising-india-incredible-india-tourism-in-india-startup-india-700-213233171.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselv;