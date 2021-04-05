import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

export default function Menu() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>MyMedicalMachine</Navbar.Brand>
      <Nav className="mr-auto">
        <IndexLinkContainer to="/">
          <Nav.Link>Työlista</Nav.Link>
        </IndexLinkContainer>
        <LinkContainer to="/devices">
          <Nav.Link>Laitteet</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/todo">
          <Nav.Link>TODO</Nav.Link>
        </LinkContainer>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Käyttäjä: Ville Fyysikko</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
