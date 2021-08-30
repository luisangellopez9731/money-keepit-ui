import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
