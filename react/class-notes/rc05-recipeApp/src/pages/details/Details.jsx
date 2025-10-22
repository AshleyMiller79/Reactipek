import React from 'react'
import { useLocation } from 'react-router-dom'
import dietSvg from "../../assets/diet.svg";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
const Details = () => {

const{state:{recipe}}=useLocation()
console.log(recipe);

  return (
    <DetailContainer>
      <HeaderContainer>
        
        <img src={dietSvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
         
          <span>
            {recipe.strMeal}
            
          </span>
          <h2> INGREDIENTS</h2>
          <span>{recipe.strIngredient1}</span>
          <span>{recipe.strIngredient2}</span>
          <span>{recipe.strIngredient3}</span>
          <span>{recipe.strIngredient4}</span>
          <span>{recipe.strIngredient5}</span>

          <span>
           
          </span>
          <span>
           
          </span>
          <span>
          
          </span>
       

          <span>
            {recipe.strInstructions}
           
          </span>
        </OtherPart>

        <ImgContainer>
          <img src={recipe.strMealThumb} alt="" width="400px" />
        </ImgContainer>

       
      </DetailPart>
    </DetailContainer>
  );
}

export default Details