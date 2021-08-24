import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Dropdown,
  Container,
  Row,
  Col
} from "react-bootstrap";

const projects = [
  "Sooda ja Kattila Oy - jatkuva",
  "Sooda ja Kattila Oy - huoltoseisokki",
  "Pannu ja Paine Oy - jatkuva",
  "Pannu ja Paine Oy - huoltoseisokki",
  "Pannu ja Paine Oy - Joulupäivystys",
  "Keinokuitu Oy - jatkuva",
  "Keinokuitu Oy - huoltoseisokki",
  "Keinokuitu Oy - Joulupäivystys",
  "Tehopakkaus Oy - jatkuva",
  "Tehopakkaus Oy - huoltoseisokki",
  "Tehopakkaus Oy - Joulupäivystys",
  "Paineruuvaus Oy - jatkuva",
  "Paineruuvaus Oy - huoltoseisokki",
  "Paineruuvaus Oy - Joulupäivystys"
];

export default function AllocationModal({ value, handleClose, nimi }) {
  console.log(value);

  const [project, setProject] = useState("valitse projekti");

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
                  {project}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {projects.map((project) => {
                    return (
                      <Dropdown.Item onClick={() => setProject(project)}>
                        {project}
                      </Dropdown.Item>
                    );
                  })}
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
