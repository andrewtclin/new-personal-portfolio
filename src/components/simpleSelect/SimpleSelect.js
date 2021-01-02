import React from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

function SimpleSelect({ value, handleSelectChange, className }) {
  const handleChange = (e) => {
    handleSelectChange(e.target.value);
  };

  return (
    <FormControl className={className}>
      {/* <InputLabel id="demo-simple-select-label">Lang</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={0}>English</MenuItem>
        <MenuItem value={1}>繁體中文</MenuItem>
        <MenuItem value={2}>简体中文</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SimpleSelect;
