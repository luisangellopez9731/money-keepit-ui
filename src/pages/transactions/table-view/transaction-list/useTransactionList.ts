import { Transaction } from "core/models";

export const useTransactionList = (transactions: Transaction[]) => {
  const transactionsPerDay = transactions.reduce<
    { date: string; transactions: Transaction[]; total: number }[]
  >((acc, current) => {
    const currentDate = new Date(current.date);
    const currentDateData = {
      year: currentDate.getUTCFullYear(),
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
    };
    const index = acc.findIndex(
      (transactions) =>
        transactions.date ===
        `${currentDateData.year}-${currentDateData.month}-${currentDateData.day}`
    );
    if (index === -1) {
      acc.push({
        date: `${currentDateData.year}-${currentDateData.month}-${currentDateData.day}`,
        transactions: [current],
        total: current.amount * (current.type === "expense" ? -1 : 1),
      });
    } else {
      acc[index].transactions.push(current);
      acc[index].total =
        current.amount * (current.type === "expense" ? -1 : 1) +
        acc[index].total;
    }
    return acc;
  }, []);

  return transactionsPerDay;
};
