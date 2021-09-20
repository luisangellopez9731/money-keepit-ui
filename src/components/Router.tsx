import { Login, SelectWorkspace } from "pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/select-workspace" component={SelectWorkspace} />
      </Switch>
    </BrowserRouter>
  );
};
