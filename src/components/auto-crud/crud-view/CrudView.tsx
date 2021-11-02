import { FC } from "react";
import { Header } from "components";

export interface CrudViewProps {
  title: React.ReactNode;
}

export const CrudView: FC<CrudViewProps> = ({ title, children }) => {
  const Title = typeof title == "string" ? <Header>{title}</Header> : title;
  return (
    <div className="flex flex-col h-full w-full">
      <div className="header">{Title}</div>

      <div className="body flex-1 overflow-auto">{children}</div>
    </div>
  );
};
