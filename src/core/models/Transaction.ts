import BaseRecord from "./BaseRecord";
import { IconType } from "components";

export default class Transaction extends BaseRecord {
  date: Date;
  amount: number;
  accountId: string;
  categoryId: string;
  description: string;
  type: "income" | "expense";
  categoryIcon: IconType;
  categoryColor: string;
}
