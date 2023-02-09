import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function DropDown({ Standard: age, setStandard: setAge }) {
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Standatd</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={0}>Nurcery</MenuItem>
          <MenuItem value={0}>LKG</MenuItem>
          <MenuItem value={0}>UKG</MenuItem>
          <MenuItem value={1}>1st</MenuItem>
          <MenuItem value={2}>2nd</MenuItem>
          <MenuItem value={3}>3rd</MenuItem>
          <MenuItem value={4}>4th</MenuItem>
          <MenuItem value={5}>5th</MenuItem>
          <MenuItem value={6}>6th</MenuItem>
          <MenuItem value={7}>7th</MenuItem>
          <MenuItem value={8}>8th</MenuItem>
          <MenuItem value={9}>9th</MenuItem>
          <MenuItem value={10}>10th</MenuItem>
          <MenuItem value={11}>11th</MenuItem>
          <MenuItem value={12}>12th</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
