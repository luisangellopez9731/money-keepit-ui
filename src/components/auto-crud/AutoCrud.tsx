import { FC } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export interface AutoCrudProps {
  EditView: FC;
  TableView: FC;
  CreateView: FC;
}

export const AutoCrud: FC<AutoCrudProps> = ({
  TableView,
  CreateView,
  EditView,
}) => {
  const { path: basePath } = useRouteMatch();
  console.log(basePath);
  return (
    <Switch>
      <Route path={`${basePath}/create`}>
        <CreateView />
      </Route>
      <Route path={`${basePath}/:id`}>
        <EditView />
      </Route>
      <Route path={`${basePath}`}>
        <TableView />
      </Route>
    </Switch>
  );
};
