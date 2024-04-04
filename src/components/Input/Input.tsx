import React from "react";
import TextField from "@mui/material/TextField";
import { observer } from "mobx-react";
import { InputAdornment } from "@mui/material";

interface InputProps {
  label: string;
  placeholder: string;
  type: "text" | "number" | "search" | "password" | "email" | "tel" | "url";
  value: string | number;

  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  rows?: number;
  required?: boolean;
  InputAdornmentEnd?: React.ReactNode;
  icon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = observer(function Input({
  label,
  placeholder,
  type,
  value,

  fullWidth,
  variant = "outlined",
  size = "medium",
  rows,
  InputAdornmentEnd,
  icon,
  onChange,
}) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      rows={rows}
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">{icon}</InputAdornment>
        ) : undefined,
        endAdornment: InputAdornmentEnd ? (
          <InputAdornment position="end">{InputAdornmentEnd}</InputAdornment>
        ) : undefined,
      }}
    />
  );
});

export default Input;
