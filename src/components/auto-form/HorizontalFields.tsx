import { Box } from "@mui/material";
import { FC } from "react";
import { Input, useAutoFormContext } from "./AutoForm";

export interface HorizontalFieldsProps {
  fields: string[];
}

export const HorizontalFields: FC<HorizontalFieldsProps> = ({ fields }) => {
  const { fields: autoFormFields, setField } = useAutoFormContext();
  const fieldsArr = Object.entries(autoFormFields).filter(
    ([fieldName, fieldInfo]) => fields.indexOf(fieldName) != -1
  );
  return (
    <Box display="flex">
      {fieldsArr.map(([fieldName, field], index) => (
        <Box key={fieldName} flex={1} mr={index < fieldsArr.length - 1 ? 2 : 0}>
          <Input
            {...field}
            onChange={(value: string) => {
              setField(fieldName, { value });
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
