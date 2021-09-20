import { AutoCrud } from "components";

export const Accounts = () => {
  return (
    <AutoCrud
      TableView={() => <p>Table</p>}
      CreateView={() => <p>Create</p>}
      EditView={() => <p>Edit</p>}
    />
  );
};
