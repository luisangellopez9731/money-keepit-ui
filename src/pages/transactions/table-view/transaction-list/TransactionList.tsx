import { FC } from "react";
import { Transaction } from "./Transaction";
import { Transaction as ITransaction } from "models";

export interface TransactionListProps {
  transactions: ITransaction[];
}

export const TransactionList: FC<TransactionListProps> = ({ transactions }) => {
  return (
    <>
      <div className="relative w-full">
        {transactions.map((tr) => (
          <Transaction {...tr} key={tr.id} />
        ))}
      </div>
    </>
  );
};
