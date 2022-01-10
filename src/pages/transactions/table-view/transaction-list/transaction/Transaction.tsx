import { FC } from "react";
import { Icon } from "components";
import { TransactionFormatter } from "core/utils";
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
    <tr className="w-full">
      <td className={`justify-center items-center p-2`}>
        <div
          className={`flex justify-center items-center p-2 bg-${categoryColor} rounded-full`}
        >
          <Icon name={categoryIcon} />
        </div>
      </td>
      <td className="w-full py-4">
        <p className="">{description}</p>
        <p className="text-sm text-gray-400">
          {TransactionFormatter.getDateFormatted(date.toString())}
        </p>
      </td>
      <td>
        <p className={`${color} font-bold text-right pr-2`}>
          {TransactionFormatter.getMoneyFormatted(amount)}
        </p>
      </td>
    </tr>
  );
};
