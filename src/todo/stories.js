import { ListGroup } from "react-bootstrap";

const list = [
  ["3.2. Täydennä vikamerkintää"],
  ["3.3. Merkitse vikamerkintä ratkaistuksi"],
  ["3.4. Palauta vikamerkintä selvitettäväksi"],
  ["3.5. Luo huoltomerkintä"],
  ["3.6. Laitepäiväkirjan tutkiminen", "light"],
  ["5.1. Luo kirjattava tulos", "danger"],
  ["5.2. Korvaa kirjattava tulos (virhekirjauksen korjaus)", "warning"]
];

export default function Stories() {
  return (
    <ListGroup>
      {list.map((item) => {
        if (item.length === 2) {
          return <ListGroup.Item variant={item[1]}>{item[0]}</ListGroup.Item>;
        } else {
          return <ListGroup.Item>{item[0]}</ListGroup.Item>;
        }
      })}
    </ListGroup>
  );
}
