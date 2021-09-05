import { useState } from "react";

export interface Field {
  type: string;
  value: string;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

export interface useAutoFormParams {
  fields: Record<string, Field>;
}

export const useAutoForm = (params: useAutoFormParams) => {
  const [fields, setFields] = useState(params.fields);

  const setField = (fieldName: string, data: Partial<Field>) => {
    setFields((fields) => ({
      ...fields,
      [fieldName]: { ...fields[fieldName], ...data },
    }));
  };
  return { fields, setField };
};

export type useAutoFormResult = ReturnType<typeof useAutoForm>;
