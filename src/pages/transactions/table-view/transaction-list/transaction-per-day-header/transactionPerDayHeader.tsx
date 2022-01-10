import { FC } from "react";
import { TransactionFormatter } from "core/utils";

export interface TransactionPerDayHeaderProps {
  date: string;
  total: number;
}

export const TransactionPerDayHeader: FC<TransactionPerDayHeaderProps> = ({
  date,
  total,
}) => {
  const date_ = new Date(date);
  let day: string | number = date_.getDate();
  day = (day < 10 ? "0" : "") + day;
  const [monthText, dayText] = date_
    .toLocaleString("default", {
      month: "long",
      weekday: "long",
    })
    .split(" ");

  const year = date_.getFullYear();
  return (
    <tr className="border-b">
      <td>
        <div className="flex justify-center items-center">
          <p className="text-3xl">{day}</p>
        </div>
      </td>
      <td className="py-2">
        <div>
          <p className="text-xl">{dayText}</p>
          <p className="text-xs text-gray-400">
            {monthText} {year}
          </p>
        </div>
      </td>

      <td>
        <p
          className={`text-right pr-2 text-${
            total < 0 ? "red" : "green"
          }-500 font-bold text-lg`}
        >
          {TransactionFormatter.getMoneyFormatted(Math.abs(total))}
        </p>
      </td>
    </tr>
  );
};
