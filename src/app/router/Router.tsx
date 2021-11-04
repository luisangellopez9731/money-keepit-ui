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
      <div
        className="relative w-screen flex flex-col justify-start items-start"
        style={{ height: `${height}px` }}
      >
        <div className="w-full h-full overflow-scroll flex-1 p-4 flex-shrink-0 pb-0">
          <Switch>
            <Route path="/accounts" component={Accounts} />
            <Route path="/transactions" component={Transactions} />
          </Switch>
        </div>
        <div className="flex flex-grow-0 flex-shrink-0 w-full overflow-auto">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
};
