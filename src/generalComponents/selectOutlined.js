import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function SelectOutlined({
  idLabel,
  className,
  id,
  label,
  data,
  noneLabel,
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
    <FormControl className={className} variant="outlined" fullWidth>
      <InputLabel id={idLabel}>{label}</InputLabel>
      <Select labelId={idLabel} id={id} label={label} {...props}>
        {items}
      </Select>
    </FormControl>
  );
}

export default SelectOutlined;
