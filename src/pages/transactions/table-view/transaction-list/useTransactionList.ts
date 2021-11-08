import { Transaction } from "core/models";

export type TransactionPerDay = {
  date: string;
  total: number;
  transactions: Transaction[];
};

export const useTransactionList = (transactions: Transaction[]) => {
  const transactionsPerDay = transactions.reduce<TransactionPerDay[]>(
    (acc, current) => {
      const currentDate = new Date(current.date);
      const amount = current.amount * (current.type === "expense" ? -1 : 1);
      const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
      const transactionPDIndex = acc.findIndex(
        ({ date }) => date === dateString
      );

      if (transactionPDIndex === -1) {
        acc.push({
          total: amount,
          date: dateString,
          transactions: [current],
        });
      } else {
        acc[transactionPDIndex].transactions.push(current);
        acc[transactionPDIndex].total = amount + acc[transactionPDIndex].total;
      }
      return acc;
    },
    []
  );

  return transactionsPerDay;
};
