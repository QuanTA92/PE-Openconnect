import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
    navigate('/user');
  };

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const authenticatedCookie = cookies.find(cookie => cookie.trim().startsWith('authenticated='));
    const usernameCookie = cookies.find(cookie => cookie.trim().startsWith('username='));

    if (authenticatedCookie && usernameCookie) {
      setIsLoggedIn(true);
      setUsername(usernameCookie.split('=')[1]);
    }
  }, []);

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#189AB4' }} variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="Images/openconnect.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          HOME
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link1" className="me-3 fs-5 text-light">My Ticket</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <NavDropdown title="WorkShop" id="basic-nav-dropdown" className="me-lg-2 fs-5 text-light">
              <NavDropdown.Item href="/hoihoa">Hôi Họa</NavDropdown.Item>
              <NavDropdown.Item href="/camhoa">Cắm Hoa</NavDropdown.Item>
              <NavDropdown.Item href="/thucong">Thủ Công</NavDropdown.Item>
              <NavDropdown.Item href="/lambanh">Làm Bánh</NavDropdown.Item>
              <NavDropdown.Item href="/other">Other</NavDropdown.Item>
            </NavDropdown>

            <Form className="d-flex mb-2 mb-lg-0 ms-lg-4">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>

            {isLoggedIn ? (
              <Nav.Link href="#" className="me-lg-2 fs-5 text-light">
                {username}
              </Nav.Link>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Nav.Link href="/user" className="me-3 fs-5 text-light" style={{ fontSize: '1.2rem' }}>
                  Login
                </Nav.Link>
                <Nav.Link href="/signup" className="me-3 fs-5 text-light" style={{ fontSize: '1.2rem' }}>
                  Sign up
                </Nav.Link>
              </div>
            )}

            {isLoggedIn && (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
