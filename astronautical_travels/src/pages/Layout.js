import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

const Layout = () => {
  return (
    <>
      
		
		<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Astronautical Travels</Navbar.Brand>
          <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Destinations">
              <Nav.Link>Destinations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AboutUs">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Booking">
              <Nav.Link>Booking</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
    </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;

/*<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <div class="container-fluid">
    			<a class="navbar-brand" href="index.html"><img src="images/astronautical_travels_icon.png" width= "50"/></a>
    			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    			aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    				<span class="navbar-toggler-icon"></span>
    			</button>
    			
    			<div class="collapse navbar-collapse" id="navbarSupportedContent">
    				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
    					<li class="nav-item">
    						<a class="nav-link" href="activities.html">Activities</a>
    					</li>
    					<li class="nav-item">
    						<a class="nav-link" href="destinations.html">Destinations <span class="sr-only"></span></a>
    					</li>
    					<li class="nav-item">
    						<a class="nav-link" href="about.html">About Us</a>
    					</li>
    					<li class="nav-item">
    						<a class="nav-link" href="destination_forecast.html">Destination Forecasts<span class="sr-only"></span></a>
    					</li>
    				</ul>
    			</div>
			</div>
		</nav>*/