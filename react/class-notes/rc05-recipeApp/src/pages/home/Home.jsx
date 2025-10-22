import Header from "../../components/header/Header";
import asci from "../../assets/home.svg"
import { useContext } from "react";
import { RecipeContextt } from "../../context/RecipeProvider";

import RecipeCard from "./RecipeCard";
const Home = () => {
  const {recipes}=useContext(RecipeContextt)
console.log(recipes);

  return (
    <div>
      {/* header */}

      <Header />

      {/* veriler gelmeden önce aşçı resmi veriler gelince bastırmak üzere recipecard */}
      {recipes.length > 0 ? (
        <RecipeCard recipes={recipes} />
      ) : (
        <img src={asci} alt="" />
      )}
    </div>
  );
};

export default Home;

