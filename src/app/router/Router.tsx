import { useState } from "react";
import { Navbar } from "./navbar";
import { useResize } from "custom-hooks";
import { Accounts, Transactions } from "pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => {
  const [height, setHeight] = useState<number>(window.innerHeight);
  useResize(() => {
    setHeight(window.innerHeight);
  });

  if (!height) {
    return <></>;
  }
  return (
    <BrowserRouter>
      <div style={{ height: `${height}px` }}>
        <div>
          <Switch>
            <Route path="/accounts" component={Accounts} />
            <Route path="/transactions" component={Transactions} />
          </Switch>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
};
