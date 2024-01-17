import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./caurosel.css"

function Carouselv() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="slide"
          src="https://imgs.search.brave.com/xdm_XkF5E8xz2wwTgIt6w4nY1jxqY8xoVweSxLWq0bc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFlL1RoZV9QcmVz/aWRlbnQsX1Nocmlf/UmFtX05hdGhfS292/aW5kX3dpdGhfdGhl/X1Byb2JhdGlvbmVy/c19vZl83MF9SUl8o/MjAxN19CYXRjaClf/b2ZfdGhlX0luZGlh/bl9Qb2xpY2VfU2Vy/dmljZV9mcm9tX1Nh/cmRhcl9WYWxsYWJo/YmhhaV9QYXRlbF9O/YXRpb25hbF9Qb2xp/Y2VfQWNhZGVteSxf/YXRfUmFzaHRyYXBh/dGlfQmhhdmFuLF9p/bl9OZXdfRGVsaGlf/b25fT2N0b2Jlcl8x/MixfMjAxOF8oMSku/SlBH"
          alt="First slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src="https://imgs.search.brave.com/Fn0-oTqWM-v8bBB-ZGaIZ3p0XwzxsUivstM7nkU5GJI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lbmds/aXNodHJpYnVuZWlt/YWdlcy5ibG9iLmNv/cmUud2luZG93cy5u/ZXQvZ2FsbGFyeS1j/b250ZW50LzIwMjIv/OS8yMDIyXzkkbGFy/Z2VpbWdfMTUyMzU1/NzU5MS5KUEc"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide"
          src="https://imgs.search.brave.com/0y3038ssl1QOSBe4NartYfeAiiCw-b4HrwOTq_xzpzM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lbi1t/ZWRpYS50aGViZXR0/ZXJpbmRpYS5jb20v/dXBsb2Fkcy8yMDE2/LzA0L0ZpcnN0LW9m/LVNvcnRzLUZlbWFs/ZS1TcXVhZC1Uby1H/dWFyZC1UaGUtSW5k/by1UaWJldC1Cb3Jk/ZXItMS5qcGc"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselv;