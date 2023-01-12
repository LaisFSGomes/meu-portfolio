import { InputLabel } from "@mui/material";
import React from "react";
import { Input as InputForm } from "@mui/material";
import { Form } from "./Input.styles";
interface InputProps {
  label?: string;
  id?: string;
  type: "email" | "text" | "textarea";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
export const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  onChange,
  value,
}) => {
  return (
    <Form>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputForm
        required
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        disableUnderline={true}
      />
    </Form>
  );
};