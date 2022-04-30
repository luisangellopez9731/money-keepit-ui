import { FC, createContext, useContext } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export interface AutoCrudContextValue {
  path: string;
}

const AutoCrudContext = createContext<AutoCrudContextValue>({
  path: "",
});

export const useAutoCrudContext = () => useContext(AutoCrudContext);

export type TableViewProps = UseQueryResult;

export interface AutoCrudProps {
  EditView: FC;
  TableView: FC<TableViewProps>;
  CreateView: FC;
  serviceName: string;
}

export const AutoCrud = ({
  TableView,
  CreateView,
  EditView,
  serviceName,
}: AutoCrudProps) => {
  const result = useQuery<any, Error>(serviceName, () =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}${serviceName}`).then((res) =>
      res.json()
    )
  );
  const { path: basePath, url } = useRouteMatch();
  return (
    <AutoCrudContext.Provider value={{ path: url }}>
      <Switch>
        <Route path={`${basePath}/create`}>
          <CreateView />
        </Route>
        <Route path={`${basePath}/:id`}>
          <EditView />
        </Route>
        <Route path={`${basePath}/`}>
          <TableView {...result} />
        </Route>
      </Switch>
    </AutoCrudContext.Provider>
  );
};
