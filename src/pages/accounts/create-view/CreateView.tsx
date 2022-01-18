import { Card } from "components/card";
import { AutoForm, useAutoForm, CrudView, Header } from "components";

export const CreateView = () => {
  const form = useAutoForm({
    fields: {
      name: {
        type: "text",
        value: "",
        label: "Name",
        autoFocus: true,
      },
      description: {
        type: "text",
        value: "",
        label: "Description",
      },
      amount: {
        type: "number",
        value: "0",
        label: "Amount",
      },
      type: {
        type: "select",
        options: [
          { text: "Income", value: 0 },
          { text: "Expense", value: 1 },
        ],
        value: "income",
        label: "Type",
      },
    },
  });

  const onSubmit = () => {
    console.log(form.getValues());
  };
  return (
    <CrudView title="Create Account">
      <div className="px-4">
        <AutoForm form={form} onSubmit={onSubmit} hideCancelButton/>
      </div>
    </CrudView>
  );
};
