import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

export default function Menu() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>Demo</Navbar.Brand>
      <Nav className="mr-auto">
        <IndexLinkContainer to="/">
          <Nav.Link>Asiakkaat</Nav.Link>
        </IndexLinkContainer>
        <LinkContainer to="/resources">
          <Nav.Link>Henkilöt</Nav.Link>
        </LinkContainer>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Käyttäjä: Eero</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
