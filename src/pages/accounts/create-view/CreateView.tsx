import { CrudView } from "components/auto-crud";
import { Card } from "components/card";
import { AutoForm, useAutoForm } from "components/auto-form";

export const CreateView = () => {
  const form = useAutoForm({
    fields: {
      name: {
        type: "text",
        value: "",
        label: "Name",
      },
      description: {
        type: "text",
        value: "",
        label: "Description",
      },
      amount: {
        type: "number",
        value: '0',
        label: "Initial Amount",
      },
    },
  });
  return (
    <CrudView title="Create Account">
      <Card>
        <AutoForm form={form} />
      </Card>{" "}
    </CrudView>
  );
};
