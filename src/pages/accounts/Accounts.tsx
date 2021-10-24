import { AutoCrud } from "components";
import { CreateView } from "./create-view";

export const Accounts = () => {
  return (
    <AutoCrud
      TableView={() => <p>Table</p>}
      CreateView={CreateView}
      EditView={() => <p>Edit</p>}
    />
  );
};
