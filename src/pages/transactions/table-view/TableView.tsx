import { FC } from "react";
import { Transaction } from "core/models";
import { TransactionList } from "./transaction-list";
import { TableViewProps, CrudView, useCrud, useCrudView } from "components/auto-crud";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Add } from "@mui/icons-material";

export const TableView: FC<TableViewProps> = ({ }) => {
  const { dataProvider, reactQueryIds } = useCrud<Transaction, any, any>();
  const { path } = useCrudView();
  const { data } = useQuery(reactQueryIds.getAll, dataProvider.getAll);
  return (
    <CrudView title="Transactions" noPadding>
      <CrudView.RightButton>
        <Link to={`${path}/create`}><Add /></Link>
      </CrudView.RightButton>
      {/* {(data as any) && (
        <TransactionList transactions={data as Transaction[]} />
      )} */}
    </CrudView>
  );
};
