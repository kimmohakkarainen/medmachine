import { useState } from "react";
import { Card, Accordion, Table } from "react-bootstrap";
import { data } from "./data";
import ProjectModal from "./projectmodal";

export default function Projects() {
  const [modal, setModal] = useState(null);
  console.log(modal);

  return (
    <>
      {modal && (
        <ProjectModal value={modal} handleClose={() => setModal(null)} />
      )}
      <Card>
        <Card.Header>Asiakkaat</Card.Header>
        <Card.Body>
          <Accordion defaultActiveKey="0">
            {data.map((team) => {
              console.log(team);
              return (
                <Accordion.Item eventKey={team.key}>
                  <Accordion.Header>
                    <Table borderless style={{ marginBottom: "0px" }}>
                      <thead style={{ borderStyle: "none" }}>
                        <tr>
                          {team.title.map((col) => {
                            return <th style={{ width: "10%" }}>{col}</th>;
                          })}
                        </tr>
                      </thead>
                    </Table>
                  </Accordion.Header>
                  <Accordion.Body style={{ paddingTop: "0px" }}>
                    <Table borderless>
                      <thead style={{ borderStyle: "none" }}>
                        <tr>
                          {team.thead.map((col) => {
                            return <th>{col}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {team.tbody.map((row) => {
                          const nimi = team.title[0] + " - " + row[0];
                          return (
                            <tr>
                              {row.map((c) => {
                                return (
                                  <td onClick={() => setModal(nimi)}>{c}</td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
}
