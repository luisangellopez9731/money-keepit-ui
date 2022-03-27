import { AutoForm, useAutoForm, CrudView } from "components";
import { HorizontalFields } from "components/auto-form";

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
    },
  });

  const onSubmit = () => {
    console.log(form.getValues());
  };
  return (
    <CrudView title="Create Account">
      <div>
        <AutoForm form={form} onSubmit={onSubmit}>
          <HorizontalFields fields={["name"]} />
          <HorizontalFields fields={["description"]} />
          <HorizontalFields fields={["amount"]} />
        </AutoForm>
      </div>
    </CrudView>
  );
};
