import { FC } from "react";

import { TableViewProps, CrudView } from "components/auto-crud";

export const TableView: FC<TableViewProps> = ({ data }) => {
  console.log(data);
  return <CrudView title="accounts"></CrudView>;
};
