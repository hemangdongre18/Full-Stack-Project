import { Category } from "@mui/icons-material";
import { useState } from "react";
import "./App.css";
import Appbar from "./component/AppBar";
import DisableElevation from "./component/Button";
import DropDown from "./component/DropDown";
import BasicTable from "./component/Table";
import EntryField from "./component/TestFeild";

function App() {
  const [name, setName] = useState("");
  const [standard, setstandard] = useState("");
  function displayName() {
    const Student = { name, standard };
    console.log(Student);
    fetch("http://localhost:8080/student/addStudent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Student),
    }).then(() => {
      console.log("New Student Added.");
    });
  }

  function allStudent() {
    fetch("http://localhost:8080/student/getAllStudent");
  }

  return (
    <div className="App">
      <Appbar />
      <EntryField name={name} setName={setName} />
      <DropDown Standard={standard} setStandard={setstandard} />
      <DisableElevation fun={displayName} allStudent={allStudent} />
      <BasicTable />
    </div>
  );
}

export default App;
