import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/large_wtppl.jpg";

export default function NavScroll() {
  return (
    <>
      <div>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              We The People
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contributors">
                Contributors
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                Create Project
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <NavDropdown
              title=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/userProfile">
                <Nav.Link as={Link} to="/userProfile">
                  My Profile
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/myProjects">
                  My Projects
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-info">Sign Out</Button>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
