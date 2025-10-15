import React, { createContext, useState } from "react";
import Home from "./components/Home";

import data from "./data";
//! 1- context alanı açıyoruz

export const StudentContext = createContext();

const App = () => {
  const [students, setStudents] = useState(data);

// const changeColor=(id,newRenk)=>{


  
//  setStudents(students.map((a) => (a.id === id ? { ...a, color: newRenk } : a)));


// //  tamirci içinde ternary tercih edilir && istenmeyen sonuç verir
// }



  return (
    //! 2- bütün projeye gönderilmek üzere. ilk olarak Home sayfasını gönderilecek verilerle sarmalladım

    // <StudentContext.Provider value={{ students,changeColor }}>
    <StudentContext.Provider value={{ students,setStudents }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
