import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

function SelectOutlined({
  idLabel,
  className,
  id,
  label,
  data,
  noneLabel,
  helperText,
  error,
  required,
  ...props
}) {
  const items = data.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {item.label}
    </MenuItem>
  ));

  items.unshift(
    <MenuItem key={0} value="">
      {noneLabel}
    </MenuItem>
  );

  return (
    <FormControl
      className={className}
      variant="outlined"
      error={error}
      fullWidth
      required={required}
    >
      <InputLabel id={idLabel}>{label}</InputLabel>
      <Select
        labelId={idLabel}
        id={id}
        label={label + (required && " *")}
        {...props}
      >
        {items}
      </Select>
      {helperText && helperText !== "" && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default SelectOutlined;
