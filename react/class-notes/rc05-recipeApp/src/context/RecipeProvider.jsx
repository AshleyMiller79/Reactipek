import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContextt = createContext();

const RecipeProvider = ({ children }) => {
  //! login sayfası için gerekli olan state ler

  const [username, setUsername] = useState(
    localStorage.getItem("kullaniciAdi") || ""
  );
  const [password, setPassword] = useState(localStorage.getItem("şifre") || "");

  //! home ve header bölümleri için gerekli stateler

  const [query, setQuery] = useState("");

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const getData = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(URL);
      // console.log(data);

      setRecipes(data.meals);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setError(true);
    }
  };


if(error){
  return <p>Something went wrong</p>
}

if(loading){
return (
  <p>
    <img src="https://media.tenor.com/khzZ7-YSJW4AAAA1/cargando.webp" alt="" />
  </p>
);

}



  return (
    <RecipeContextt.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        setQuery,
        getData,
        recipes,
      }}
    >
      {children}
    </RecipeContextt.Provider>
  );
};

export default RecipeProvider;
