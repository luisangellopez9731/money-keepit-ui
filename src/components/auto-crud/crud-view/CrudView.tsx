import { FC } from "react";

export interface CrudViewProps {
  title: React.ReactNode;
}

export const CrudView: FC<CrudViewProps> = ({ title, children }) => {
  const Title =
    typeof title == "string" ? (
      <h3 className="text-3xl p-4 text-white">{title}</h3>
    ) : (
      title
    );
  return (
    <div className="flex flex-col h-full">
      <div className="header mb-4 mt-4">{Title}</div>

      <div className="body flex-1">{children}</div>
    </div>
  );
};
