import { useState } from "react";
import { Card, ListGroup, Accordion, Table } from "react-bootstrap";
/* import { data } from "./data"; */
/* import AllocationModal from "./allocationmodal"; */

export default function Summary() {
  const [modal, setModal] = useState(null);
  console.log(modal);

  return (
    <>
      <Card>
        <Card.Header>Kokonaiskuva</Card.Header>
        <Card.Body>
          <Table borderless>
            <thead style={{ borderStyle: "none" }}>
              <tr>
                <th />
                <th>30</th>
                <th>31</th>
                <th>32</th>
                <th>33</th>
                <th>34</th>
                <th>35</th>
                <th>36</th>
                <th>37</th>
                <th>38</th>
                <th>39</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>asiakastarve</td>
                <td>55</td>
                <td>58</td>
                <td>65</td>
                <td>55</td>
                <td>58</td>
                <td>65</td>
                <td>55</td>
                <td>58</td>
                <td>65</td>
                <td>65</td>
              </tr>
              <tr>
                <td>asiakastarve täytetty</td>
                <td>54</td>
                <td>54</td>
                <td>59</td>
                <td>55</td>
                <td>54</td>
                <td>54</td>
                <td>54</td>
                <td>54</td>
                <td>54</td>
                <td>54</td>
              </tr>
              <tr>
                <td>asiakastarve puuttuvat</td>
                <td>1</td>
                <td>4</td>
                <td>6</td>
                <td></td>
                <td>4</td>
                <td>11</td>
                <td>1</td>
                <td>4</td>
                <td>11</td>
                <td>11</td>
              </tr>
              <tr>
                <td>omat varatut</td>
                <td>48</td>
                <td>49</td>
                <td>52</td>
                <td>48</td>
                <td>50</td>
                <td>50</td>
                <td>47</td>
                <td>40</td>
                <td>35</td>
                <td>35</td>
              </tr>
              <tr>
                <td>omat vapaat</td>
                <td>2</td>
                <td>2</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>2</td>
                <td></td>
                <td>2</td>
                <td>13</td>
              </tr>
              <tr>
                <td>omat poissa</td>
                <td>8</td>
                <td>7</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>2</td>
                <td>5</td>
                <td>8</td>
                <td></td>
              </tr>
              <tr>
                <td>tilapäiset</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>alihankkijat</td>
                <td>6</td>
                <td>7</td>
                <td>7</td>
                <td>7</td>
                <td>4</td>
                <td>4</td>
                <td>7</td>
                <td>14</td>
                <td>15</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
