import { FC } from "react";
import { Link } from "react-router-dom";
import { TableViewProps, CrudView, useCrudView } from "components/auto-crud";

export const TableView: FC<TableViewProps> = ({ data }) => {
  const { path } = useCrudView();
  return (
    <CrudView title="Accounts">
      <CrudView.RightButton>
        <Link to={`${path}/create`}>Add</Link>
      </CrudView.RightButton>
    </CrudView>
  );
};
