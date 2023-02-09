import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import deleteStudent from "./DeleteStudent";

function createData(Name: string, Id: number, Standard: number) {
  return { Id, Name, Standard };
}

const rows = [createData(1, "Hemang", 12), createData(1, "Kannu", 12)];

export default function BasicTable() {
  const [category, setcategory] = React.useState([]);
  React.useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:8080/student/getAllStudent");
      const getdata = await res.json();
      setcategory(getdata);
      //console.log(getdata);
    };
    getcategory();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Standard</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((getcategory) => (
            <TableRow
              key={getcategory.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{getcategory.id}</TableCell>
              <TableCell align="center">{getcategory.name}</TableCell>
              <TableCell align="center">{getcategory.standard}</TableCell>
              <button onClick={() => deleteStudent(getcategory.id)}>
                {" "}
                Delete{" "}
              </button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
