import Menu from "./menu";
import Tyolista from "./tyolista";
import Devices from "./devices";
import Allocation from "./allocation";
import Projects from "./projects";
import Todo from "./todo";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import BrowserRouter from "react-router-dom/BrowserRouter";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/resources" component={Allocation} />
        <Route exact path="/tasks" component={Tyolista} />
        <Route path="/devices" component={Devices} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  );
}
