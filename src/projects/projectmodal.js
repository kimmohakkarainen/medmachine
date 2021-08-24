import React from "react";
import {
  Modal,
  Button,
  Form,
  Dropdown,
  Container,
  Row,
  Col
} from "react-bootstrap";

const persons = ["Matti", "Maija", "Seppo", "Turkka", "Virpi", "Eetu"];

function Rivi({ label, selected, variant }) {
  return (
    <Row>
      <Form.Label column xs="4">
        {label}
      </Form.Label>
      <Col xs="8">
        <Dropdown>
          <Dropdown.Toggle variant={variant} id="dropdown-basic">
            {selected}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {persons.map((person) => {
              return <Dropdown.Item>{person}</Dropdown.Item>;
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default function ProjectModal({ value, handleClose, nimi }) {
  console.log(value);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Muokkaa projektin tiimiä</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Form.Label column xs="4">
              Project
            </Form.Label>
            <Col xs="8">
              <Form.Control readOnly value={value} />
            </Col>
          </Row>
          <Rivi label="hitsaaja #1" selected="Matti" variant="light" />
          <Rivi label="hitsaaja #2" selected="Maija" variant="light" />
          <Rivi
            label="hitsaaja #3"
            selected="-- valitse --"
            variant="warning"
          />
          <Rivi label="putkimies #1" selected="Masa" variant="light" />
          <Rivi label="putkimies #2" selected="Pekka" variant="light" />
          <Rivi
            label="putkimies #3"
            selected="-- valitse --"
            variant="warning"
          />
          <Rivi label="yleismies #1" selected="Jussi" variant="light" />
          <Rivi label="yleismies #2" selected="Maija" variant="light" />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Peruuta
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Talleta
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
