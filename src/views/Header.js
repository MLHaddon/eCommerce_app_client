import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



function Header() {
  // Variables
  const [username, setUsername] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const isUserLoggedIn = () => {
    // Check if the user's authentication status is stored in local storage
    const userAuth = localStorage.getItem('userAuth');
    
    // If the userAuth item exists and is set to true, the user is considered logged in
    return userAuth ? JSON.parse(userAuth) : false;
  };

  const logout = () => {
    localStorage.removeItem("userAuth");
    // You can also redirect the user to the login page
    window.location.href = "/login";
  };


  // Functions
  const isLoggedIn = () => {
    //! Check for refresh Token
    try {
      if (isUserLoggedIn === true) {
        return (
          <NavDropdown title="Portfolio" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/apps/prediction_app">Prediction_App</NavDropdown.Item>
            //! TODO Add link back to portfolio website using an href to the separate IP address or domain name
            <NavDropdown.Item href="/">Back to Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
          </NavDropdown>
        )
      } else {
        return (
          <NavDropdown title="Login/Signup" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="login">Login</NavDropdown.Item>
            <NavDropdown.Item href="signup">Signup</NavDropdown.Item>
          </NavDropdown>
        )
      }
    } catch (err) {
      console.log("My ERROR: ", err);
    }

  }

  // Navigation / View
  return (
  <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/browse">Browse</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          {isLoggedIn()}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )

}

export default Header;