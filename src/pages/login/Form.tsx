import { AuthService } from "services";
import { useHistory } from "react-router";
import { AutoForm, useAutoForm } from "components";

const Form = () => {
  const history = useHistory();
  const form = useAutoForm({
    fields: {
      username: { type: "text", value: "", label: "Username", autoFocus: true },
      password: { type: "password", value: "", label: "Password" },
    },
  });

  const onSubmit = async () => {
    const authService = new AuthService();
    const values = form.getValues();
    await authService.loginUsername(values);
    history.push("select-workspace");
  };
  return (
    <>
      <AutoForm form={form} onSubmit={onSubmit} />
    </>
  );
};

export default Form;
