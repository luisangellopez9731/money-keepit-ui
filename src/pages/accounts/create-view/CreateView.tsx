import { ArrowBack, Menu } from "@mui/icons-material";
import { AutoForm, useAutoForm, CrudView, useCrudView } from "components";
import { HorizontalFields } from "components/auto-form";
import { Link } from "react-router-dom";

export const CreateView = () => {
  const { path } = useCrudView();
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
  };
  return (
    <CrudView title="Create Account">
      <CrudView.LeftButton>
        <Link to={`${path}`}>
          <ArrowBack />
        </Link>
      </CrudView.LeftButton>
      <AutoForm form={form} onSubmit={onSubmit}>
        <HorizontalFields fields={["name"]} />
        <HorizontalFields fields={["description"]} />
        <HorizontalFields fields={["amount"]} />
      </AutoForm>
    </CrudView>
  );
};
