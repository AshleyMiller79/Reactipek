import React, { createContext, useContext, useEffect, useState } from "react";
//! 1- context alanı açıyoruz
export const KullaniciContextt = createContext();

const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (a, b) => {
    setUsers(users.map((c) => (c.id === a ? { ...c, width: b } : c)));
  };

  return (
    //! 2- bütün projeye gönderilmek üzere. ilk olarak Home sayfasını gönderilecek verilerle sarmalladım
    <KullaniciContextt.Provider value={{ users, changeWidth }}>
      {children}
    </KullaniciContextt.Provider>
  );
};

//? (extra ortak paranteze almak gibi) 2.yol
//? 3-Consuming işlemini basitleştirmek için bir custom hook (verilen ismin use ile başlaması şart sayılır)

export const useKullaniciContextt = () => {
  return useContext(KullaniciContextt);
};

export default KullaniciProvider;
