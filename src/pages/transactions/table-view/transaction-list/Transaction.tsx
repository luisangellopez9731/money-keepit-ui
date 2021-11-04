import { FC } from "react";
import { Icon } from "components";
import { TransactionFormatter } from "utils";
import { Transaction as ITransaction } from "core/models";

export const Transaction: FC<ITransaction> = ({
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
          {TransactionFormatter.getDateFormated(date.toString())}
        </p>
      </div>
      <div>
        <p className={`${color} font-bold`}>
          {TransactionFormatter.getMoneyFormated(amount)}
        </p>
      </div>
    </div>
  );
};
