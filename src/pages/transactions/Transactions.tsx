import { AutoCrud } from "components";
import { TableView } from "./table-view";
import { Transaction } from "core/models";
import { CreateView } from "./create-view";

export const Transactions = () => {
  return (
    <AutoCrud
      TableView={TableView}
      CreateView={CreateView}
      serviceName="transactions"
      EditView={() => <p>Edit</p>}
    />
  );
};
