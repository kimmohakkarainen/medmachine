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

export default function AllocationModal({ value, handleClose, nimi }) {
  console.log(value);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Muokkaa allokaatiota</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Form.Label column xs="4">
              Henkilö
            </Form.Label>
            <Col xs="8">
              <Form.Control readOnly value={value} />
            </Col>
          </Row>
          <Row>
            <Form.Label column xs="4">
              Projekti
            </Form.Label>
            <Col xs="8">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Valitse projekti
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Sooda ja Kattila Oy - jatkuva</Dropdown.Item>
                  <Dropdown.Item>
                    Sooda ja Kattila Oy - huoltoseisokki
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Sooda ja Kattila Oy - Joulupäivystys
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
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
