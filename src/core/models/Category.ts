import BaseRecord from "./BaseRecord";
import { IconType } from "components";

export default class Category extends BaseRecord {
  name: string;
  description: string;
  icon: IconType;
  color: string;
}
