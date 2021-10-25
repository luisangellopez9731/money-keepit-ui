import { useState } from "react";

export type FieldType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface Field {
  value: string;
  label?: string;
  type: FieldType;
  autoFocus?: boolean;
  placeholder?: string;
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

  const getValues = () => {
    return Object.entries(fields).reduce(
      (acc, [name, field]) => ({ ...acc, [name]: field.value }),
      {}
    ) as any;
  };
  return { fields, setField, getValues };
};

export type useAutoFormResult = ReturnType<typeof useAutoForm>;
