import React from 'react'
import { Cards, MainContainer, RecipeButton, RecipeHeader, RecipeImage } from './HomeStyles'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipes}) => {

const navigate=useNavigate()


  return (
    <MainContainer>
{recipes.map((recipe)=>(

  <Cards key={recipe.idMeal}>
<RecipeHeader>{recipe.strMeal} </RecipeHeader>
<RecipeImage src={recipe.strMealThumb}/>
 <RecipeButton
 onClick={()=>navigate(`/details/${recipe.idMeal}`, {state:{recipe}})}
 >Details</RecipeButton>

  </Cards>
))}



    </MainContainer>
  )
}

export default RecipeCard