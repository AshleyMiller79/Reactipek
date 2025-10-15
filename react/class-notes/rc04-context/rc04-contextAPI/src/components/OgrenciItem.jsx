import { useContext } from "react";
import { StudentContext } from "../App";


const OgrenciItem = () => {
  //! 3- (context consumer) globalde (mesela App.js de) tanımladığım değerleri buraya çağırdık
  // const {students,changeColor}=useContext(StudentContext)
  const { students, setStudents } = useContext(StudentContext);

  console.log(students);

  return (
    <div>
      {students.map((a) => (
        <div style={{ backgroundColor: a.color }}>
          <h3> NAME: {a.name}</h3>
          <h4>EMAIL: {a.email}</h4>
          <h4>AGE: {a.age}</h4>
          Color:{" "}
          <input
            type="text"
            value={a.color}
            // onChange={(e)=>changeColor(a.id,e.target.value)}
            onChange={(e) =>
              setStudents(
                students.map((b) =>
                  b.id === a.id ? { ...b, color: e.target.value } : b
                )
              )
            }
          />
        </div>
      ))}
    </div>
  );
};

export default OgrenciItem;
