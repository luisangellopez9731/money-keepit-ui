import { FC } from "react";
import { useAutoFormResult, Field } from "./useAutoForm";

export interface AutoFormProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  form: useAutoFormResult;
}

export interface InputProps extends Field {
  onChange: (value: string) => void;
}

export const Input: FC<InputProps> = ({ label, onChange, ...rest }) => {
  return (
    <div className="mb-4">
      <label
        className="block font-bold mb-2"
        htmlFor="username"
      >
        {label || ""}
      </label>
      {rest.type == "select" ? (
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => onChange(e.currentTarget.value)}
        >
          {rest.options?.map(({ text, value }, index) => (
            <option value={value} key={index}>
              {text}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...rest}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      )}
    </div>
  );
};

export const AutoForm: FC<AutoFormProps> = ({ form, onSubmit, onCancel }) => {
  const { fields, setField } = form;
  const onSubmit_ = (e: any) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  const onCancel_ = () => {
    if (onCancel) {
      onCancel();
    }
  };
  return (
    <form onSubmit={onSubmit_}>
      {Object.entries(fields).map(([fieldName, field], index) => (
        <Input
          {...field}
          key={fieldName}
          onChange={(value: string) => {
            setField(fieldName, { value });
          }}
        />
      ))}
      <button type="submit">Submit</button>
      <button onClick={onCancel_}>Cancel</button>
    </form>
  );
};
