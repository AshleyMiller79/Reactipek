import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
 
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { toastBasarili } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  //!bu sayfaya ister login ister register ister google için gelin, sadece bir seferliğine user kontrolü yapan fonksiyonu çalıştır

  useEffect(() => {
    userTakip();
  }, []);

  //!register
  //!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastBasarili("register işlemi başarılı");

    navigate("/");

   

  
  };

 


  

  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. bir kere çalıştır login logout takip eder.login ile bilgiler gelir bizde burada currentUser ın içine atarız, signout olunca bilgiler gider bizde currentUser ın içini güncelleriz (register ve logindeki email vs ye navbardan ulaşabilmek için). google ile giriş yapınca user ile displayname gelir ama email ile girecekseniz en üstte update kodunu firebase den çağırmalısınız.(userTakip)

  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setCurrentUser({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return (
    <AuthContextt.Provider
      value={{ createKullanici, currentUser }}
    >
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
