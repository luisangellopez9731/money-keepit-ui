import { AutoCrud } from "components";
import { TableView } from "./table-view";
import { CreateView } from "./create-view";
import { Transaction } from "models";

export const Transactions = () => {
  return (
    <AutoCrud<Transaction>
      serviceName="transactions"
      TableView={TableView}
      CreateView={CreateView}
      EditView={() => <p>Edit</p>}
    />
  );
};
