import { Container, Nav, Navbar } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Header.css";

const Header = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Navbar className="navbar" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <div className="logo">
                        <img className="w-100" src="https://i.ibb.co/K9LHz1v/logo-removebg-preview.png" alt="logo" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mx-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >Service</Nav.Link>
                    <Nav.Link>Contract Us</Nav.Link>
                    <Nav.Link>Gallery</Nav.Link>
                    <Nav.Link>About Us</Nav.Link>
                </Nav>
                <div>
                    <button className="btn__regular">Login</button>
                    <button className="btn__register">Register</button>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Slider className="slider container" {...settings}>
          <div className="banner-1">
            <h1>Welcome to Our Hotel <br /> and Resort</h1>
            <p>Travel is the movement of people between distant geographical locations.<br /> Travel can also include relatively short stays between <br /> successive movements, as in the case of tourism.</p>
            <div className="text-center">
              <button className="btn__regular">Get Booking</button>
            </div>
          </div>
          <div className="banner-2">
            <h1>It is perfect time <br /> to travel</h1>
            <p>Reasons for traveling include recreation, holidays, tourism or vacationing, <br /> research travel, the gathering of information, visiting people, volunteer travel for charity, migration <br /> to begin life somewhere else, religious pilgrimages</p>
            <div className="text-center">
              <button className="btn__regular">Get Booking</button>
            </div>
          </div>
          <div className="banner-3">
            <h1>Discover your beautiful place <br /> with us</h1>
            <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure <br /> to their summer homes and villas in cities such as Pompeii and Baiae.While early travel tended to be <br /> slower, more dangerous, and more dominated by trade and migration</p>
            <div className="text-center">
              <button className="btn__regular">Get Booking</button>
            </div>
          </div>
        </Slider>
      </div>
    );
};

export default Header;