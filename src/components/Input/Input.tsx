import React from "react";
import { InputLabel } from "@mui/material";
import { Input as InputForm } from "@mui/material";
import { Form } from "./Input.styles";
import { ModeContext } from "contexts";
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
  const { mode } = React.useContext(ModeContext);

  return (
    <Form className={mode}>
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
