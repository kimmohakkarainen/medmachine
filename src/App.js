import Menu from "./menu";
import Tyolista from "./tyolista";
import Devices from "./devices";
import Todo from "./todo";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import BrowserRouter from "react-router-dom/BrowserRouter";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Tyolista} />
        <Route path="/devices" component={Devices} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  );
}
