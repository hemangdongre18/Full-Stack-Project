export default function deleteStudent(id) {
  console.log(id);
  fetch("http://localhost:8080/student/deleteByid", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(id),
  }).then(() => {
    console.log("New Student Deleted.");
  });
}
