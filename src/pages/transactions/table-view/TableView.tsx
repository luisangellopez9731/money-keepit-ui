import { FC } from "react";
import { Transaction } from "core/models";
import { TransactionList } from "./transaction-list";
import { TableViewProps, CrudView } from "components/auto-crud";

export const TableView: FC<TableViewProps> = ({ data }) => {
  return (
    <CrudView title="Transactions" noPadding>
      {(data as any) && (
        <TransactionList transactions={data as Transaction[]} />
      )}
    </CrudView>
  );
};
