import { useState, useEffect } from "react";
function Home() {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    const studentData = {
      name: "Suhan",
      role: "Frontend Developer",
      email: "suhanr951@gmail.com",
      phone: "8050260464",
      education: "BCA",
      skills: ["React", "JavaScript","HTML","CSS"],
      projects: ["LOGIN PAGE IN REACT"]
    };

    setStudent(studentData);
  }, []);


  if (!student) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <center>
      <h1>RESUME</h1>
      </center>
      <hr />

      <h2>{student.name}</h2>
      <p><b>Role:</b> {student.role}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Phone:</b> {student.phone}</p>

      <hr />

      <h3>Education</h3>
      <p>{student.education}</p>

      <h3>Skills</h3>
      <ul>
        {student.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h3>Projects</h3>
      <ul>
        {student.projects.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
