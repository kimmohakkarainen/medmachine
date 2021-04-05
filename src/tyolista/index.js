import { Card, ListGroup, Accordion } from "react-bootstrap";

export default function Tyolista() {
  return (
    <Card>
      <Card.Header>Työlista</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>6.1. Esitä viikkonäkymä</ListGroup.Item>
          <ListGroup.Item>
            6.2. Esitä kuukausinäkymä (5 rullaavaa viikkoa)
          </ListGroup.Item>
          <ListGroup.Item>6.3. Esitä vuosinäkymä</ListGroup.Item>
          <ListGroup.Item>
            6.5. Muuta yksittäisen testin suorituspäivää
          </ListGroup.Item>
          <ListGroup.Item>
            6.6. Muuta yksittäisen testin suoritusväliä
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
