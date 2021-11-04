import { AutoCrud } from "components";
import { TableView } from "./table-view";
import { CreateView } from "./create-view";

export const Accounts = () => {
  return (
    <AutoCrud
      serviceName="accounts"
      TableView={TableView}
      CreateView={CreateView}
      EditView={() => <p>Edit</p>}
    />
  );
};
