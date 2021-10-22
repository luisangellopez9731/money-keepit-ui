import { Accounts } from "pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/accounts" component={Accounts} />
      </Switch>
    </BrowserRouter>
  );
};
