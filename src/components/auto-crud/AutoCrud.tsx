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

export interface TableViewProps {

};

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
          <TableView />
        </Route>
      </Switch>
    </AutoCrudContext.Provider>
  );
};
