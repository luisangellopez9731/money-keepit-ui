import { FC } from "react";

export interface HeaderProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Header: FC<HeaderProps> = ({ component = "h1", children }) => {
  const Comp = component;
  return <Comp className="text-xl font-bold mb-4">{children}</Comp>;
};
