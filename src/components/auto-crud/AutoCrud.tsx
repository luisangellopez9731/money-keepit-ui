import { FC } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useQuery, UseQueryResult } from "react-query";

export type TableViewProps = UseQueryResult;

export interface AutoCrudProps {
  EditView: FC;
  TableView: FC<TableViewProps>;
  CreateView: FC;
  serviceName: string;
}

export const AutoCrud = <T,>({
  TableView,
  CreateView,
  EditView,
  serviceName,
}: AutoCrudProps) => {
  const result = useQuery<T[], Error>(serviceName, () =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}${serviceName}`).then((res) =>
      res.json()
    )
  );
  const { path: basePath } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${basePath}/create`}>
        <CreateView />
      </Route>
      <Route path={`${basePath}/:id`}>
        <EditView />
      </Route>
      <Route path={`${basePath}`}>
        <TableView {...result} />
      </Route>
    </Switch>
  );
};
