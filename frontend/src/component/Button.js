import * as React from "react";
import Button from "@mui/material/Button";

export default function DisableElevation({ fun, allStudent }) {
  return (
    <Button variant="contained" disableElevation onClick={fun}>
      Add Student
    </Button>
  );
}
