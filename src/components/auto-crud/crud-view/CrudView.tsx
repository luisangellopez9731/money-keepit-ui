import { FC } from "react";
import { Header } from "components";

export interface CrudViewProps {
  title: React.ReactNode;
  noPadding?: boolean;
  noPaddingHeader?: boolean;
}

export const CrudView: FC<CrudViewProps> = ({
  title,
  children,
  noPadding,
  noPaddingHeader,
}) => {
  const Title = typeof title == "string" ? <Header>{title}</Header> : title;
  return (
    <div className={`flex flex-col h-full w-full`}>
      <div className={`header${noPaddingHeader ? "" : " px-4"} pt-4`}>{Title}</div>

      <div
        className={`body flex-1 overflow-auto${noPadding ? "" : " p-4 pb-0"}`}
      >
        {children}
      </div>
    </div>
  );
};
