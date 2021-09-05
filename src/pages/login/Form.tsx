import { AutoForm, useAutoForm } from "components";

const Form = () => {
  const form = useAutoForm({
    fields: {
      username: { type: "text", value: "", label: "Username", autoFocus: true },
      password: { type: "password", value: "", label: "Password" },
    },
  });
  return (
    <>
      <AutoForm form={form} />
    </>
  );
};

export default Form;
