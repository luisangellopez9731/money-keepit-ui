import { ArrowBack } from "@mui/icons-material";
import { AutoForm, useAutoForm, CrudView, useCrudView, useCrud } from "components";
import { HorizontalFields } from "components/auto-form";
import { Link, useHistory } from "react-router-dom";

export const CreateView = () => {
  const { path } = useCrudView()
  const { dataProvider, reactQueryIds } = useCrud();
  const history = useHistory()
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

  const onSubmit = async () => {
    try {
      await dataProvider.create({ ...form.getValues() })
      history.push(path)
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <CrudView title="Create Account">
      {/* <CrudView.LeftButton>
        <Link to={`${path}`}>
          <ArrowBack />
        </Link>
      </CrudView.LeftButton> */}
      <AutoForm form={form} onSubmit={onSubmit}>
        <HorizontalFields fields={["name"]} />
        <HorizontalFields fields={["description"]} />
        <HorizontalFields fields={["amount"]} />
      </AutoForm>
    </CrudView>
  );
};
