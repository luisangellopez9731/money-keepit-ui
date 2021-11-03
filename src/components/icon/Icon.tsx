import { FC } from "react";

export type IconType =
  | "home"
  | "utensils"
  | "hamburger"
  | "plane"
  | "car"
  | "tshirt"
  | "toilet"
  | "bed"
  | "laptop"
  | "cocktail"
  | "campground"
  | "map"
  | "mountain"
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
