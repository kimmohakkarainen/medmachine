import Menu from "./menu";
import Tyolista from "./tyolista";
import Devices from "./devices";
import Allocation from "./allocation";
import Projects from "./projects";
import Summary from "./summary";
import Todo from "./todo";
import { Route, Switch, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/customers" component={Projects} />
        <Route exact path="/resources" component={Allocation} />
        <Route exact path="/" component={Summary} />
        <Route exact path="/tasks" component={Tyolista} />
        <Route path="/devices" component={Devices} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  );
}
