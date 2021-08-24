import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

export default function Menu() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <img
          alt=""
          src="https://www.eth.fi/_media_27972_/logot/ETH-GROUP-LOGO(1).jpg"
          width="90"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <IndexLinkContainer to="/">
          <Nav.Link>Summary</Nav.Link>
        </IndexLinkContainer>
        <IndexLinkContainer to="/customers">
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
