import { FC } from "react";
import { Transaction } from "./transaction";
import { Transaction as ITransaction } from "core/models";
import { useTransactionList } from "./useTransactionList";
import { TransactionPerDayHeader } from "./transaction-per-day-header";
export interface TransactionListProps {
  transactions: ITransaction[];
}

export const TransactionList: FC<TransactionListProps> = ({ transactions }) => {
  const transactionsPerDay = useTransactionList(transactions);
  return (
    <>
      <div className="relative w-full bg-gray-100">
        {transactionsPerDay.map((trPD) => (
          <table
            key={trPD.date}
            className="my-8 border-t border-b first:mt-0 bg-white"
          >
            <tbody>
              <TransactionPerDayHeader {...trPD} />
              {trPD.transactions.map((tr) => (
                <Transaction {...tr} key={tr.id} />
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};
