import { FC } from "react";

export type IconType =
  | "home"
  | "restaurant"
  | "lunch_dining"
  | "local_airport"
  | "directions_car"
  | "bed"
  | "laptop"
  | "local_bar"
  | "cabin"
  | "place"
  | "landscape"
  | "account_balance_wallet"
  | "dashboard"
  | "sync_alt"
  | "more_vert";

export interface IconProps {
  name: IconType;
}

export const Icon: FC<IconProps> = ({ name }) => {
  return <span className="material-icons">{name}</span>;
};
