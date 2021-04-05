import { Card, ListGroup, Accordion } from "react-bootstrap";

export default function Devices() {
  return (
    <Card>
      <Card.Header>Laitteet</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>1.1. Luo uusi Laite</ListGroup.Item>
          <ListGroup.Item>1.2. Poista laite</ListGroup.Item>
          <ListGroup.Item>1.3. Esitä ja tulosta laitetieto</ListGroup.Item>
          <ListGroup.Item>1.4. Exporttaa laitetieto </ListGroup.Item>
          <ListGroup.Item>
            1.5. Laitteen vikahistorian selaus esim. samankaltaisten tapahtumien
            etsintä{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            3.1. Luo vikamerkintä laitepäiväkirjaan
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
