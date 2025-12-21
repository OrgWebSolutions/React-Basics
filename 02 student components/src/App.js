// src/App.js
import Student from "./components/Student";

function App() {
  const students = [
    { id: 1, name: "Aarav", grade: "A" },
    { id: 2, name: "Meera", grade: "B+" },
    { id: 3, name: "Saurabh", grade: "A-" },
    { id: 4, name: "Kritika", grade: "B" }
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          grade={student.grade}
        />
      ))}
    </div>
  );
}

export default App;
