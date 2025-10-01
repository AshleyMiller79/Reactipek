import React, { useEffect, useState } from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import axios from "axios";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET (READ)

  const getBilgiler = async () => {
    const res = await axios.get(url);

    setTutorials(res.data);
  };

  useEffect(() => {
    getBilgiler();
  }, []);

  //!DELETE

  const deleteBilgi = async (id) => {
    await axios.delete(`${url}${id}/`);

    getBilgiler();
  };

  console.log(tutorials);


//! POST 

const postBilgi=async(yeniVeri)=>{
await axios.post(url,yeniVeri)

getBilgiler()


}



  return (
    <div>
      <AddBilgi postBilgi={postBilgi}/>
      <BilgiList tutorials={tutorials} deleteBilgi={deleteBilgi} />
    </div>
  );
};

export default Home;
