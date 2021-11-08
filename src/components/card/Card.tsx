import { FC } from "react";
import styles from "./card.module.css";

export const Card: FC = ({ children }) => {
  return (
    <div className={`${styles.card} bg-white h-full pt-12 p-4 rounded-t-3xl`}>
      {children}
    </div>
  );
};
