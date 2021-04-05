import { Card, Accordion, Button } from "react-bootstrap";
import Terms from "./terms";
import Stories from "./stories";

export default function Todo() {
  return (
    <Accordion defaultActiveKey="Terms">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="Terms">
          Käsitteet
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="Terms">
          <Card.Body>
            <Terms />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="Stories">
          Kohdistamattomat käyttötapaukset
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="Stories">
          <Card.Body>
            <Stories />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
