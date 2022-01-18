import { FC } from "react";
import { useAutoFormResult, Field } from "./useAutoForm";

export interface AutoFormProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  form: useAutoFormResult;
  hideCancelButton?: boolean;
}

export interface InputProps extends Field {
  onChange: (value: string) => void;
}

export const Input: FC<InputProps> = ({ label, onChange, ...rest }) => {
  return (
    <div className="mb-4">
      <label htmlFor="username">
        {label || ""}
      </label>
      {rest.type === "select" ? (
        <select onChange={(e) => onChange(e.currentTarget.value)}>
          {rest.options?.map(({ text, value }, index) => (
            <option value={value} key={index}>
              {text}
            </option>
          ))}
        </select>
      ) : (
        <input {...rest} onChange={(e) => onChange(e.currentTarget.value)} />
      )}
    </div>
  );
};

export const AutoForm: FC<AutoFormProps> = ({
  form,
  onSubmit,
  onCancel,
  hideCancelButton,
}) => {
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
      <div className="flex w-full justify-between">
        <button type="submit">Submit</button>
        {!hideCancelButton && <button onClick={onCancel_}>Cancel</button>}
      </div>
    </form>
  );
};
