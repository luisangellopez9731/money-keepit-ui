import { FC } from "react";

import { TableViewProps, CrudView } from "components/auto-crud";
import { TransactionList } from "./TransactionList";
import { Transaction } from "models";

export const TableView: FC<TableViewProps> = ({ data }) => {
  return (
    <CrudView title="Transactions">
      {(data as any) && (
        <TransactionList transactions={data as Transaction[]} />
      )}
    </CrudView>
  );
};
