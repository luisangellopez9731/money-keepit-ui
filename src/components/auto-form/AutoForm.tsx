import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { FC, useEffect, createContext, useContext } from "react";
import { useAutoFormResult, Field } from "./useAutoForm";

const AutoFormContext = createContext<useAutoFormResult>({} as any);

export const useAutoFormContext = () => useContext(AutoFormContext);

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
  useEffect(() => {
    if (rest.type == "select") {
      if (rest.options && rest.options.length > 0) {
        onChange("0" as any);
      }
    }
  }, []);
  return (
    <Box mt={4} mb={4}>
      {rest.type === "select" ? (
        <Select
          {...rest}
          fullWidth
          onChange={(e) => onChange((e as any).target.value)}
        >
          {rest.options?.map(({ text, value }, index) => (
            <MenuItem value={value} key={index}>
              {text}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField
          fullWidth
          {...rest}
          label={label}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      )}
    </Box>
  );
};

export const AutoForm: FC<AutoFormProps> = ({
  form,
  onSubmit,
  onCancel,
  hideCancelButton,
  children,
}) => {
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
    <AutoFormContext.Provider value={form}>
      <Box component="form" onSubmit={onSubmit_} noValidate autoComplete="off">
        {children}
        <Box display="flex">
          {!hideCancelButton && (
            <Button fullWidth color="error" onClick={onCancel_}>
              Cancel
            </Button>
          )}
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </AutoFormContext.Provider>
  );
};
