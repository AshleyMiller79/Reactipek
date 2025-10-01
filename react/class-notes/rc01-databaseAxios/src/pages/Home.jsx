import React, { useEffect, useState } from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import axios from "axios";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

// database adresi diğer sayfalarda olmasın diye bütün database işlemlerini bu sayfada yaptık


  //! GET (READ)

  const getBilgiler = async () => {
    const res = await axios.get(url);

    setTutorials(res.data);
  };
// sonsuz döngü olmaması için useEffect
  useEffect(() => {
    getBilgiler();
  }, []);

  //!DELETE

  const deleteBilgi = async (id) => {
    await axios.delete(`${url}${id}/`);
// üstteki işlem database e kaydeder ama useState tetiklemesi ile bütün proje render edilmemiş olacağından verileri useState ile tutorials a atan getBilgiler fonk çağırdık
    getBilgiler();
  };

  console.log(tutorials);


//! POST 

const postBilgi=async(yeniVeri)=>{
await axios.post(url,yeniVeri)

getBilgiler()


}

//! PUT

const putBilgiler=async(edit)=>{
await axios.put(`${url}${edit.id}/`,edit)


// normalde put delete işlemlerinde sadece id FaYandexInternational, bu projede backendciler / eklemişler
getBilgiler()


}

  return (
    <div>
      <AddBilgi postBilgi={postBilgi}/>
      <BilgiList tutorials={tutorials} deleteBilgi={deleteBilgi} putBilgiler={putBilgiler}/>
    </div>
  );
};

export default Home;
