import React from "react";
import { useLocation } from "react-router-dom";
// import {  useParams } from "react-router-dom";

const TeacherDetails = () => {
  // const [people, setPeople] = useState([]);

  // const {id}=useParams()

  //  useEffect(() => {
  //    axios
  //      .get("https://jsonplaceholder.typicode.com/users")
  //      .then((res) => setPeople(res.data));
  //  }, []);

  // birde dizide map le dolaşıp id si tutanı filtreleyip onu bastırmamız lazım

  const {
    state: { person },
  } = useLocation();
  // console.log(person);

  return (
    <div className="text-center">
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`}
        alt=""
      />

      <h5>{person.name}</h5>
      <h6>{person.username} </h6>
      <h4>{person.phone} </h4>
      <h5>{person.address.street}</h5>
    </div>
  );
};

export default TeacherDetails;
