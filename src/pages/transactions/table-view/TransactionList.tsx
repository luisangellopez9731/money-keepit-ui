import { FC } from "react";
import { Transaction } from "models";
import { Icon } from "components";

export interface TransactionListProps {
  transactions: Transaction[];
}

function getDateFormated(date: string) {
  const date_ = new Date(date);
  const hours = date_.getHours();
  const minutes = date_.getMinutes();
  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function getMoneyFormated(money: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(money);
}

const TransactionComp: FC<Transaction> = ({
  description,
  date,
  amount,
  type,
  categoryIcon,
  categoryColor,
}) => {
  const color = `text-${type === "income" ? "green" : "red"}-500`;
  return (
    <div className="w-full flex my-2 border-b-2 pb-2">
      <div className={`flex justify-center items-center p-2`}>
        <div
          className={`flex justify-center items-center p-2 bg-${categoryColor} rounded-full`}
        >
          <Icon name={categoryIcon} />
        </div>
      </div>
      <div className="flex-1">
        <p className="">{description}</p>
        <p className="text-sm text-gray-400">
          {getDateFormated(date.toString())}
        </p>
      </div>
      <div>
        <p className={`${color} font-bold`}>{getMoneyFormated(amount)}</p>
      </div>
    </div>
  );
};

export const TransactionList: FC<TransactionListProps> = ({ transactions }) => {
  return (
    <>
      <div className="relative w-full">
        {transactions.map((tr) => (
          <TransactionComp {...tr} key={tr.id} />
        ))}
      </div>
    </>
  );
};
