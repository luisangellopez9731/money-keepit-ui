import { Transaction } from "models";
import { AutoCrud } from "components";
import { TableView } from "./table-view";
import { CreateView } from "./create-view";

export const Transactions = () => {
  return (
    <AutoCrud<Transaction>
      TableView={TableView}
      CreateView={CreateView}
      serviceName="transactions"
      EditView={() => <p>Edit</p>}
    />
  );
};
